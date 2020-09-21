import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aaa',
  template: `aaa:<input type="text" [(ngModel)]="data">`
})
export class AaaComponent implements OnInit {
  data = '';

  constructor() { }

  ngOnInit() { }

}
