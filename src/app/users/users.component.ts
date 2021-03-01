import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private http: HttpClient) {}

  users: any;
  title: string;
  body: string;
  userId: string;
  response: any;
  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
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
    this.http
      .post('https://jsonplaceholder.typicode.com/posts', data)
      .subscribe((data) => {
        console.log(data);
        this.response = data;
      });
  }
}
