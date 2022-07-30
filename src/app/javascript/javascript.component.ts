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
  e;
  num1 = 1225.30;
  val1;
  fix1;
  fix2;
  localToStr;
  ngOnInit(): void {
    this.a = typeof(null);
    this.b = typeof(Object);
    this.c = typeof('');
    this.d = typeof(Number);
    this.e = typeof(NaN);
    console.log(typeof(null));

    console.log('TypeScript Number Properties: ');
    console.log('Maximum value that a number variable can hold: ' + Number.MAX_VALUE);
    console.log('The least value that a number variable can hold: ' + Number.MIN_VALUE);
    console.log('Value of Negative Infinity: ' + Number.NEGATIVE_INFINITY);
    console.log('Value of Negative Infinity:' + Number.POSITIVE_INFINITY);

    // toExponential()
    this.val1 = this.num1.toExponential();
    this.fix1 = this.num1.toFixed();
    this.fix2 = this.num1.toFixed(2);
    this.localToStr = this.num1.toLocaleString();
    console.log(this.val1, typeof(this.localToStr));
  }

}
