import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelperService } from './helper-service';
import { NavigationModule } from './shared/navigation/navigation.module';
import { PequenioAnimalModule } from './shared/components/pequenioanimal/pequenioanimal.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NavigationModule,
    PequenioAnimalModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    HelperService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
