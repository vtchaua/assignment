import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trangsuadoitaikhoan',
  templateUrl: './trangsuadoitaikhoan.component.html',
  styleUrls: ['./trangsuadoitaikhoan.component.css']
})
export class TrangsuadoitaikhoanComponent implements OnInit {

  Student = JSON.parse(localStorage.getItem('user'));
  Students = JSON.parse(localStorage.getItem('listuser'));
  showfullnamebutton = true;
  showfullname = true;
  showemailbutton = true;
  showemail = true;
  showbirthdaybutton = true;
  showbirthday = true;
  showgenderbutton = true;
  showgender = true;

  constructor() { }

  ngOnInit() {
  }

  refullnamebutton() {
    this.showfullnamebutton = false;
    this.showfullname = false;
  }
  refullname() {
    this.showfullnamebutton = true;
    this.showfullname = true;
    localStorage.setItem('user', JSON.stringify(this.Student));
    for(var i = 0; i < this.Students.length; i++) {
      if(this.Students[i].username === this.Student.username) {
        this.Students[i].fullname = this.Student.fullname;
      }
    }
    localStorage.setItem('listuser', JSON.stringify(this.Students));
  }

  reemailbutton() {
    this.showemailbutton = false;
    this.showemail = false;
  }
  reemail() {
    this.showemailbutton = true;
    this.showemail = true;
    localStorage.setItem('user', JSON.stringify(this.Student));
    for(var i = 0; i < this.Students.length; i++) {
      if(this.Students[i].username === this.Student.username) {
        this.Students[i].email = this.Student.email;
      }
    }
    localStorage.setItem('listuser', JSON.stringify(this.Students));
  }

  rebirthdaybutton() {
    this.showbirthdaybutton = false;
    this.showbirthday = false;
  }
  rebirthday() {
    this.showbirthdaybutton = true;
    this.showbirthday = true;
    localStorage.setItem('user', JSON.stringify(this.Student));
    for(var i = 0; i < this.Students.length; i++) {
      if(this.Students[i].username === this.Student.username) {
        this.Students[i].birthday = this.Student.birthday;
      }
    }
    localStorage.setItem('listuser', JSON.stringify(this.Students));
  }

  regenderbutton() {
    this.showgenderbutton = false;
    this.showgender = false;
  }
  regender() {
    this.showgenderbutton = true;
    this.showgender = true;
    localStorage.setItem('user', JSON.stringify(this.Student));
    for(var i = 0; i < this.Students.length; i++) {
      if(this.Students[i].username === this.Student.username) {
        this.Students[i].gender = this.Student.gender;
      }
    }
    localStorage.setItem('listuser', JSON.stringify(this.Students));
  }

  dangxuat() {
    this.Student = null;
    localStorage.setItem('user', JSON.stringify(this.Student));
  }
}

