import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IndexComponent } from './index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: IndexComponent
      }
    ])
  ],
  declarations: [IndexComponent],
  exports: [RouterModule]
})
export class IndexModule { }
