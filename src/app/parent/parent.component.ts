import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { NameService } from '../services/name.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent) child;
  message: string;
  number: number = 9;
  constructor(private names: NameService) {}
  name = this.names.name; // this.name as alex
  pin() {
    this.number++;
  }
  ngOnInit(): void {
    console.log('parent oninit called');

    this.names.setName('john'); // setting name on nameservice
    this.name = this.names.name;
  }

  changeNum(e: any) {
    console.log(e);
    this.number = e;
  }
  // decnum(e) {
  //   console.log(e);
  //   this.number = e;
  // }
  ngAfterViewInit(): void {
    this.message = this.child.message;
  }
}
