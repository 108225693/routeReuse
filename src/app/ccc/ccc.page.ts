import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ccc',
  template: `ccc:<input type="text" [(ngModel)]="data">`
})
export class CccComponent implements OnInit {
  data = '';

  constructor() { }

  ngOnInit() { }

}
