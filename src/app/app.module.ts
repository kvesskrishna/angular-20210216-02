import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InputValidatorComponent } from './input-validator/input-validator.component';
import { AgeValidatorComponent } from './age-validator/age-validator.component';
import { ConditionalRenderingComponent } from './conditional-rendering/conditional-rendering.component';
import { ImageSelectorComponent } from './image-selector/image-selector.component';
import { MathsTableComponent } from './maths-table/maths-table.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { PipeSearchComponent } from './pipe-search/pipe-search.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
// import { UsersComponent } from './users/users.component';
// import { UserComponent } from './users/user/user.component';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    InputValidatorComponent,
    AgeValidatorComponent,
    ConditionalRenderingComponent,
    ImageSelectorComponent,
    MathsTableComponent,
    HighlightDirective,
    PipeDemoComponent,
    DiscountPipe,
    SearchPipe,
    PipeSearchComponent,
    ParentComponent,
    ChildComponent,
    PageNotFoundComponent,
    ProductsComponent,
    ProductComponent,
    // UsersComponent,
    // UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UsersModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
