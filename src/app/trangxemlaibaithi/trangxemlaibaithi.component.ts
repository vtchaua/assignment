import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-trangxemlaibaithi',
  templateUrl: './trangxemlaibaithi.component.html',
  styleUrls: ['./trangxemlaibaithi.component.css']
})
export class TrangxemlaibaithiComponent implements OnInit {

  Quiz: any;
  Id;
  pagesize = 1;
  pagecurrent = 1;
  totlepage;
  name : String = 'name';
  urlquiz;
  showfirth = true;
  showbegin = true;
  showlast = true;
  showend = true;
  showfinish = false;
  task = JSON.parse(localStorage.getItem('task'));
  Student = JSON.parse(localStorage.getItem('user'));
  Students = JSON.parse(localStorage.getItem('listuser'));
  show = false;

  constructor(private http:HttpClient) { }
  
  ngOnInit() {
    this.thi();
  }
  getAllQuiz () {
    return this.http.get(this.urlquiz);
  }

  next() {
    if(this.pagecurrent < this.totlepage) {
      this.pagecurrent++;
    }
    this.showbegin = true;
    this.showfirth = true;
    if(this.pagecurrent === this.totlepage) {
      this.showlast = false;
      this.showend = false;
      this.showfinish = true;
    }
  }

  previrous() {
    if(this.pagecurrent > 1) {
      this.pagecurrent--;
    }
    this.showlast = true;
    this.showend = true;
    this.showfinish = false;
    if(this.pagecurrent === 1) {
      this.showbegin = false;
      this.showfirth = false;
    }
  }

  home() {
    this.pagecurrent=1;
    this.showfirth = false;
    this.showbegin = false;
    this.showend = true;
    this.showlast = true;
    this.showfinish = false;
  }

  end() {
    this.pagecurrent = this.totlepage;
    this.showend = false;
    this.showlast = false;
    this.showfirth = true;
    this.showbegin = true;
    this.showfinish = true;
  }
  
  counttotlepage() {
    return Math.ceil(this.Quiz.length/this.pagesize);
  }
   thi() {
    this.Id = this.task.IdSubject;
    this.urlquiz = './assets/db/Quizs/' + this.Id + '.json';
    this.getAllQuiz().subscribe (data=>{
      this.Quiz=data;
      this.totlepage = this.counttotlepage();
      if(this.pagecurrent === 1) {
        this.showbegin = false;
        this.showfirth = false;
      }
      if(this.pagecurrent === this.totlepage) {
        this.showend = false;
        this.showlast = false;
      }
    });
  }
}