import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';

import { IndexComponent } from './index/index.page';

const COMPONENTS = [
  IndexComponent
];

@NgModule({
  imports: [SharedModule],
  providers: [],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class LayoutModule { }
