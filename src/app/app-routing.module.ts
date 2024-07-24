import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { ExperienceComponent } from './components/experiences/experience/experience.component';

const appRoutes: Routes = [
  { 
      path: 'sandbox',
    loadChildren: () => import('./pages/sandbox/sandbox.module').then(x => x.SandboxModule   )
  },
  { 
    path: 'music',
    loadChildren: () => import('./pages/music/music.module').then(x => x.MusicModule   )
  },
  { 
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(x => x.HomeModule   )
  },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', redirectTo: '/home', pathMatch: 'full' },
];
 
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
