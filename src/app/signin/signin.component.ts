import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor() {}
  uname: string = '';
  pwd: string = '';
  message: string = 'Enter Credentials';
  credentials = { uname: 'root', pwd: '123' };
  ngOnInit(): void {}
  login() {
    this.message =
      this.uname.length == 0
        ? 'Enter Username'
        : this.pwd.length == 0
        ? 'Enter Password'
        : this.credentials.uname != this.uname ||
          this.credentials.pwd != this.pwd
        ? 'Enter Valid'
        : ' Login success';
  }
}
