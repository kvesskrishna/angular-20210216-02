import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

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

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent, InputValidatorComponent, AgeValidatorComponent, ConditionalRenderingComponent, ImageSelectorComponent, MathsTableComponent, HighlightDirective, PipeDemoComponent, DiscountPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
