import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { DefaultComponent } from './default/default.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DefaultComponent],
  imports: [CommonModule, ImagesRoutingModule, FormsModule],
})
export class ImagesModule {}
