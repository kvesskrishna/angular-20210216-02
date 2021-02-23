import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional-rendering',
  templateUrl: './conditional-rendering.component.html',
  styleUrls: ['./conditional-rendering.component.css'],
})
export class ConditionalRenderingComponent implements OnInit {
  showImage: boolean;
  constructor() {}

  ngOnInit(): void {
    this.showImage = false;
  }
  toggleImage() {
    this.showImage = !this.showImage;
  }
}
