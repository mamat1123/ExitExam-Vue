import database from './database' // ดึงค่ามาจาก Database
export default {
    user: database.user,
    //function นี้จะทำหน้าที่ตรวจสอบ รหัสนักศึกษา และรหัสผ่าน ในทุกเงื่อนไขพร้อมส่งค่ากลับในรูปแบบของ JSON เพื่อแจ้งผลลัพธ์
    checkLogin(id, password) {
        for (var i in this.user) {
            if (this.user[i].id === id && this.user[i].password === password) {
                if (this.user[i].status === 'not enroll') {
                    this.user[i].status = 'enroll'
                    return {
                        title: 'สำเร็จ!',
                        status: 'success',
                        text: 'การลงทะเบียนเสร็จสิ้น'
                    }
                }
                else {
                    return {
                        title: 'ผิดพลาด!',
                        status: 'error',
                        text: 'รหัสนักศึกษานี้ได้ทำการลงทะเบียนไว้แล้ว'
                    }
                }
            }
        }
        return {
            title: 'ผิดพลาด!',
            status: 'error',
            text: 'รหัสนักศึกษาหรือรหัสผ่านไม่ถูกต้องกรุณาลองใหม่อีกครั้ง'
        }
    },
    // fuction นี้ จะหานักศึกษาที่ทำการลงทะเบียนไปแล้ว โดยตรวจจาก status 
    getCountStatus() {
        var enroll = 0
        for (var i in this.user) {
            if (this.user[i].status === 'enroll') {
                enroll += 1
            }
        }
        return enroll
    }
}