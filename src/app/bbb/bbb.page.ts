import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bbb',
  template: `bbb:<input type="text" [(ngModel)]="data">`
})
export class BbbComponent implements OnInit {
  data = '';

  constructor() { }

  ngOnInit() { }

}
