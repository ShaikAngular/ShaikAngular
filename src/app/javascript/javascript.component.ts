import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})
export class JavascriptComponent implements OnInit {

  constructor() { }
  a;
  b;
  c;
  d;
  ngOnInit(): void {
    this.a = typeof(null);
    this.b = typeof(Object);
    this.c = typeof('');
    this.d = typeof(Number);
    console.log(typeof(null));
  }

}
