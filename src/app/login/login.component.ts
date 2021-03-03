import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  uname: string = '';
  pwd: string = '';
  message: string = 'Enter Credentials';
  credentials = { uname: 'root', pwd: '123' };
  constructor(
    private router: Router,
    private auth: AuthGuardService,
    private route: ActivatedRoute
  ) {}
  path = this.route.snapshot.params.path
    ? this.route.snapshot.params.path
    : 'home';
  userlogged = this.auth.logged;
  ngOnInit(): void {
    console.log(this.path);
  }
  login(form: NgForm) {
    if (!form.valid) return;
    console.log(form);
    this.uname = form.value.uname;
    this.pwd = form.value.password;
    this.message =
      this.uname.length == 0
        ? 'Enter Username'
        : this.pwd.length == 0
        ? 'Enter Password'
        : this.credentials.uname != this.uname ||
          this.credentials.pwd != this.pwd
        ? 'Enter Valid'
        : 'success';
    if (this.message == 'success') {
      this.auth.setLogged(true);
      this.router.navigate(['/' + this.path]);
    }
  }
  logout() {
    this.auth.setLogged(false);
    this.router.navigate(['/login']);
  }
}
