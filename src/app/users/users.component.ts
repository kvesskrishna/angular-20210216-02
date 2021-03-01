import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private userservice: UsersService) {}

  users: any;
  title: string;
  body: string;
  userId: string;
  response: any;
  ngOnInit(): void {
    // this.http
    //   .get('https://jsonplaceholder.typicode.com/users')
    //   .subscribe((data) => {
    //     console.log(data);
    //     this.users = data;
    //   });
    this.userservice.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
  submit() {
    let data = {
      title: this.title,
      body: this.body,
      userId: this.userId,
    };
    // this.http
    //   .post('https://jsonplaceholder.typicode.com/posts', data)
    //   .subscribe((data) => {
    //     console.log(data);
    //     this.response = data;
    //   });
  }
}
