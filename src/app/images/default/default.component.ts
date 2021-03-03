import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
})
export class DefaultComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  url: string;
  ngOnInit(): void {
    this.url = this.route.snapshot.params.url;
    // console.log(url);
  }
}
