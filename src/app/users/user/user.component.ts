import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userservice: UsersService
  ) {}
  // id: any;
  // name: any;
  data: any;
  user: any;
  ngOnInit(): void {
    this.data = this.route.snapshot.params;
    this.userservice.getUsers(this.data.id).subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }
}
