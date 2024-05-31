import { NgModule } from '@angular/core';
// import { TranslateService } from 'src/app/shared/translation/services/translate.service';
import { NavMenuModule } from './nav-menu/nav-menu.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { NavLocationModule } from './nav-location/nav-location.module';

// export function setupTranslateFactory(
//   service: TranslateService): Function {
//   return () => service.use('fr');
// }

@NgModule({
  imports: [  
    NavMenuModule,
    NavBarModule,
    NavLocationModule
  ],
  exports: [
    NavMenuModule,
    NavBarModule,
    NavLocationModule
  ]
})
export class NavigationModule { }
