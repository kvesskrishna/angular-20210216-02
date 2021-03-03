import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MathsTableComponent } from './maths-table/maths-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: FooterComponent },
      { path: 'table', component: MathsTableComponent },
      {
        path: 'images/:url',
        loadChildren: './images/images.module#ImagesModule',
      },
    ],
  },
  { path: 'parent', component: ParentComponent },
  { path: 'login/:path', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'pipes',
    component: PipeDemoComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule',
    canActivate: [AuthGuardService],
  },
  // { path: 'user/:id/:name', component: UserComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
