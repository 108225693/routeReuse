import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AaaComponent } from './aaa.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AaaComponent
      }
    ])
  ],
  declarations: [AaaComponent],
  exports: [RouterModule]
})
export class AaaModule { }
