import model from '../model/model'
import * as view from '../view/Login.vue'
export default {
    view: view,
    model: model,
    // Function นี้จะรับค่าที่ถูกส่งมาจาก View และส่งผ่านไปยัง model ตาม concept ของ MVC
    LoginController(id,password) {
        this.view = view.default.methods
        id = parseInt(id) // เปลี่ยนค่ารหัสนักศึกษาให้เป็น Integer เพื่อให้ง่านต่อการตรวจสอบใน model
        var resuit = this.model.checkLogin(id,password)// เรียก function ใน model 
        this.view.alertView(resuit)// นำผลลัพธ์ที่ได้มา แสดงแจ้งเตือนที่หน้า view 
    }
}