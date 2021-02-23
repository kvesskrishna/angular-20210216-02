import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-validator',
  templateUrl: './age-validator.component.html',
  styleUrls: ['./age-validator.component.css'],
})
export class AgeValidatorComponent implements OnInit {
  age: number;
  heading: string;
  headColor: string;
  number: number;
  showAgeBox: boolean;
  btnText: string;
  constructor() {}

  ngOnInit(): void {
    this.heading = 'Please enter your age';
    this.headColor = 'black';
    this.showAgeBox = false;
    this.btnText = 'Show Input for age';
  }
  isString() {
    return isNaN(this.number);
  }
  toggleBoxes() {
    this.showAgeBox = !this.showAgeBox;
    this.btnText = this.showAgeBox
      ? 'Show Input for number'
      : 'Show Input for age';
  }

  checkEven() {
    return this.number % 2 == 0 ? 'Even number' : 'Odd number';
  }
  updateAge(e) {
    this.heading = e.target.value >= 18 ? 'Valid age' : 'Invalid age';
    this.headColor = e.target.value >= 18 ? 'green' : 'red';
  }
}
