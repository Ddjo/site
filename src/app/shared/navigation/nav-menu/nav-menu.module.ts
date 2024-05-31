import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavMenuComponent } from './nav-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([])
  ],
  exports: [
    NavMenuComponent
  ]
})
export class NavMenuModule { }
