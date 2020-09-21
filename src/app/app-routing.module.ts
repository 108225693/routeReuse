import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.page';

const routes: Routes = [
  { path: '', redirectTo: 'aaa', pathMatch: 'full' },
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'aaa', loadChildren: () => import('./aaa/aaa.module').then(m => m.AaaModule),
        data: { reuse: true, title: '页面aaa' }
      },
      {
        path: 'bbb', loadChildren: () => import('./bbb/bbb.module').then(m => m.BbbModule),
        data: { reuse: true, title: '页面bbb' }
      },
      {
        path: 'ccc', loadChildren: () => import('./ccc/ccc.module').then(m => m.CccModule),
        data: { reuse: true, title: '页面ccc' }
      },
    ]
  },
  { path: '**', redirectTo: 'aaa' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
