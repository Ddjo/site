import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationModule } from './shared/navigation/navigation.module';
// import { AppRoutingModule } from './app-routing.module';
import { PequenioAnimalComponent } from './shared/pequenioanimal/pequenioanimal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelperService } from './helper-service';
// import { ContentService } from './shared/content/content.service';
import { APP_BASE_HREF } from '@angular/common';
import { NotificationService } from './shared/content/notification.service';
import { MenuService } from './shared/content/menu.service';
// import { ExperiencesService } from './components/experiencesold/experiences.service';

import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { MusicModule } from './components/music/music.module';
import { PequenioAnimalModule } from './shared/pequenioanimal/pequenioanimal.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NavigationModule,
    PequenioAnimalModule,
    // AboutModule:,
    MusicModule,
    // SinglePageAppModule,
    // MultiPagesAppModule,
    // SkillsModule,
    AppRoutingModule,
    // AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    HelperService,
    // ContentService,
    // AboutService,
    // ExperiencesCarouselService,
    NotificationService,
    // SkillsService,
    MenuService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
