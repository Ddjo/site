import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MusicComponent } from './components/music/music.component';
// import { ExperienceComponent } from './components/experiences/experience/experience.component';

const appRoutes: Routes = [

{ 
    path: 'music',
 loadChildren: () => import('./components/music/music-routing.module').then(x => x.MusicRoutingModule   )
},
{ path: '', redirectTo: '/music', pathMatch: 'full' },
];
 
@NgModule({
  imports: [RouterModule.forRoot(appRoutes,     {preloadingStrategy: PreloadAllModules }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
