import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar.component';
import { NavMenuModule } from '../nav-menu/nav-menu.module';
import { NavLocationModule } from '../nav-location/nav-location.module';

@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    NavMenuModule,
    NavLocationModule,
    HttpClientModule,
  ],
  exports: [
    NavBarComponent
  ],
  providers: [
  ],
  bootstrap: []
})
export class NavBarModule { }
