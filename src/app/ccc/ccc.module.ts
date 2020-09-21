import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CccComponent } from './ccc.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CccComponent
      }
    ])
  ],
  declarations: [CccComponent],
  exports: [RouterModule]
})
export class CccModule { }
