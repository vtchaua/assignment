import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trangdangki',
  templateUrl: './trangdangki.component.html',
  styleUrls: ['./trangdangki.component.css']
})
export class TrangdangkiComponent implements OnInit {

  newuser = {
    "username": "",
    "password": "",
    "fullname": "",
    "email": "",
    "gender": "true",
    "birthday": "",
    "schoolfee": "0",
    "marks": "0"
  }

  Students = JSON.parse(localStorage.getItem('listuser'));

  show = true;

  constructor() { 
  }

  ngOnInit() {
  }

  dangki() {
    for(var i = 0; i < this.Students.length; i++) {
      if(this.newuser.username === this.Students[i].username) {
        this.show = false;
        return 0;
      }
      this.show = true;
    }
  }
  Adduser() {
    this.Students.push(this.newuser);
    localStorage.setItem('listuser', JSON.stringify(this.Students));
  }
}
