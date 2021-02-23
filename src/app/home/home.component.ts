import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name: string;
  email: string = '';
  age = 45;
  constructor() {}
  ngOnInit() {
    let email = 'joihn@asf.com';
    this.email = email;
    this.name = 'John Doe';
  }
  increaseAge() {
    // if (this.age <= 49) this.age = this.age + 1;
    // else alert('Max age is 50');
    //ternary operator condition? operation on true:operation on false
    //binary operator - sum, dif, mul a+B
    //unary operator - a++
    this.age <= 49 ? this.age++ : alert('Max age is 50');
  }
  decreaseAge() {
    if (this.age >= 21) this.age = this.age - 1;
    else alert('Min age is 20');
  }
}
