import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';

import { AppComponent } from './app.component';
import { RoutesModule } from './app-routes.module';
import { LayoutModule } from './layout.module';
import { SharedModule } from './shared.module';
import { SimpleReuseStrategy } from './route-reuse-strategy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    FormsModule,
    LayoutModule,
    SharedModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: SimpleReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
