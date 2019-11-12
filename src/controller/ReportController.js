import model from '../model/model'
import * as view from '../view/Report.vue'
export default {
    view: view,
    model: model,
    // Function นี้จะรับค่าที่ถูกส่งมาจาก View และส่งผ่านไปยัง model ตาม concept ของ MVC
    CheckReportController() {
        this.view = view.default.methods
        return this.model.getCountStatus() // เรียก function ใน model 
    }
}