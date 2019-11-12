<template>
  <div style="margin-top:5%">
    <v-card class="mt-4 mx-auto" max-width="400">
      <v-sheet
        class="v-sheet--offset mx-auto"
        color="cyan"
        elevation="12"
        max-width="calc(100% - 32px)"
      >
        <!-- <v-icon class="icon-main" size="90">account_circle</v-icon> -->
        <h1 style="text-align: center;">{{this.count}}</h1>
      </v-sheet>

      <v-card-text class="pt-0">
        <div class="title font-weight-light mb-2">จำนวนนักศึกษาที่มาลงทะเบียน</div>
        <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
        <v-divider class="my-2"></v-divider>
        <v-icon class="mr-2" small>mdi-clock</v-icon>
        <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
      </v-card-text>
    </v-card>
    <div style="text-align: center;margin-top:5%">
      <v-btn color="primary" @click="GObackView">back</v-btn>
    </div>
  </div>
</template>

<script>
import * as ReportController from '../controller/ReportController'
export default {
  //กำหนดตัวแปรที่มารับค่าในหน้า view
  data: () => ({
    count: 0 //จำนวนนักศึกษาที่ลงทะเบียน
  }),
  mounted() {
    //Function นี้ทำหน้าที่รับค่ามาจาก View โดยจะส่งไปยัง controller แล้วนำค่าที่ได้มาใส่ในตัวแปรที่เราได้กำหนดไว้
    this.count = ReportController.default.CheckReportController()
  },
  methods: {
    //Function นี้ทำหน้าที่รับค่ามาจาก View ที่ผู้ใช้กด back แล้วจะ set path ไปยังหน้าหลัก
    GObackView() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
.icon-main {
  height: 100%;
  width: 100%;
  font-size: 90px;
}
</style>