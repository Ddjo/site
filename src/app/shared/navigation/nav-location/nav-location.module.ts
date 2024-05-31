import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavLocationComponent } from './nav-location.component';

@NgModule({
  declarations: [
    NavLocationComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    NavLocationComponent
  ],
  providers: [
  ],
  bootstrap: []
})
export class NavLocationModule { }
