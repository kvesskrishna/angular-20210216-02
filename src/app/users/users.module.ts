import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserDetailComponent, UserComponent, UsersComponent],
  imports: [CommonModule, UsersRoutingModule, FormsModule],
})
export class UsersModule {}
