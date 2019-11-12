<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Enroll CS Connection</v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="รหัสนักศึกษา"
                    name="login"
                    v-model="account"
                    prepend-icon="person"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    label="รหัสผ่าน"
                    v-model="password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="primary" @click="LoginView">Login</v-btn>
              </v-card-actions>
              <v-fab-transition>
                <v-btn @click="ReportView" color="pink" dark absolute top right fab>
                  <v-icon>show_chart</v-icon>
                </v-btn>
              </v-fab-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Swal from 'sweetalert2' // libary ที่ใช้ในการแสดงแจ้งเตือน
import * as EnrollController from '../controller/EnrollController' // Function ต่างๆใน controller
export default {
  props: {
    source: String,
  },
  //กำหนดตัวแปรที่มารับค่าในหน้า view
  data: () => ({
    account: '', // รับค่ารหัสนักศึกษาจาก text field
    password: ''// รับค่ารหัสผ่านจาก text field
  }),
  methods: {
    //Function นี้ทำหน้าที่รับค่ามาจาก View ที่ผู้ใช้กด login แล้วส่งต่อไปยัง controller
    LoginView() {
      EnrollController.default.LoginController(this.account, this.password)
    },
    //Function นี้ทำหน้าที่แสดงการแจ้งเตื่อนต่างๆ ของผลลัพธ์ใน model ที่ถูกส่งผ่าน controller
    alertView(resuit) {
      Swal.fire({
        title: resuit.title,
        text: resuit.text,
        type: resuit.status,
        confirmButtonText: 'Cool'
      })
    },
    //Function นี้ทำหน้าที่รับค่ามาจาก View ที่ผู้ใช้กด Report แล้วจะ set path ไปยังหน้า report
    ReportView() {
      this.$router.push('/report')
    }
  }
}
</script>