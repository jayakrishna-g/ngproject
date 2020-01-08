import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  x = 'Random DATA';
  constructor() { }

  ngOnInit() {
  }
  foo() {
    this.x = this.x + 'new';
  }
}
