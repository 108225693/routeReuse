import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [SharedModule, AppRoutingModule]
})
export class RoutesModule { }
