import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BbbComponent } from './bbb.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: BbbComponent
      }
    ])
  ],
  declarations: [BbbComponent],
  exports: [RouterModule]
})
export class BbbModule { }
