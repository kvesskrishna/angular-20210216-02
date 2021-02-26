import { Component, OnInit, OnDestroy } from '@angular/core';
import { NameService } from '../services/name.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private ns: NameService) {}

  name: string;

  ngOnInit(): void {
    console.log('footer oninit called');

    this.name = this.ns.name;
  }
  ngOnDestroy(): void {
    console.log(this.name);
  }
}
