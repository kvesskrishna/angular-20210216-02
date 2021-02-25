import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent) child;
  message: string;
  number: number = 9;
  constructor() {}

  ngOnInit(): void {}

  increaseNumber(e) {
    console.log(e);
    this.number = e;
  }
  ngAfterViewInit(): void {
    this.message = this.child.message;
  }
}
