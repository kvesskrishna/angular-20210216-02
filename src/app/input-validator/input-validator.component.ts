import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-validator',
  templateUrl: './input-validator.component.html',
  styleUrls: ['./input-validator.component.css'],
})
export class InputValidatorComponent implements OnInit {
  name: string;
  msg: string;
  msgColor: string;
  constructor() {}

  ngOnInit(): void {
    this.name = 'John Doe';
    this.msg = 'Current Username';
    this.msgColor = 'green';
  }
  inputFocus() {
    console.log('input focus');
  }

  keyDown() {
    console.log('key down');
  }
  keyPress() {
    console.log('key press');
  }
  keyUp(e) {
    console.log('key up', e.target.value);
    this.msg =
      e.target.value.length < 3
        ? 'Min 3 characters is allowed'
        : this.updateName(e.target.value);
    this.msgColor = e.target.value.length < 3 ? 'red' : 'green';
  }
  // this.name = e.target.value;

  updateName(name) {
    this.name = name;
    return 'Name updated';
  }
  inputBlur(e) {
    console.log('input blur');
    this.msg =
      e.target.value.length < 3
        ? 'Min 3 characters is allowed'
        : 'Name updated ...';
    // this.msg = 'Name updated';
  }
}
