import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MusicComponent } from './music.component';
// import { ExperienceComponent } from './components/experiences/experience/experience.component';

const musicRoutes: Routes = [

{ path: '',
component: MusicComponent
,
},
];

@NgModule({
  imports: [RouterModule.forChild(musicRoutes
    )],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
