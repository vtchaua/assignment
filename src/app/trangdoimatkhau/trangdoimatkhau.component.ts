import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trangdoimatkhau',
  templateUrl: './trangdoimatkhau.component.html',
  styleUrls: ['./trangdoimatkhau.component.css']
})
export class TrangdoimatkhauComponent implements OnInit {
  Student = JSON.parse(localStorage.getItem('user'));
  Students = JSON.parse(localStorage.getItem('listuser'));
  email: "";
  username: "";
  password = "";
  repassword = "";
  check1 = false;
  check2 = false;
  show = false;

  constructor() { 
  }

  ngOnInit() {
  }

  thaydoi() {
    let x = 0;
    if(this.password.length > 7) {
      if(this.password === this.repassword) {
        for(var i = 0; i < this.Students.length; i++) {
          if(this.Students[i].username === this.username && this.Students[i].email === this.email) {
            this.Students[i].password = this.repassword;
            localStorage.setItem('listuser', JSON.stringify(this.Students));
            x = 1;
            this.show = true;
          }
        }
        if(x === 0) {
          alert('Email hoặc tên tài khoản không khớp.');
        }
        if(this.Student.username === this.username && this.Student.email === this.email) {
          this.Student.password = this.repassword;
          localStorage.setItem('user', JSON.stringify(this.Student));
        }
      }
      else {
        alert('Nhập lại mật khẩu không khớp.');
      }
    }
    else {
      alert('Mật khẩu phải từ 8 kí tự trở lên.');
    }
  }
  dangxuat() {
    this.Student = null;
    localStorage.setItem('user', JSON.stringify(this.Student));
  }
}
