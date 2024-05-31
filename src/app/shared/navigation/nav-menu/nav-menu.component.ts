import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { timer, Subject } from 'rxjs';
import {HelperService } from 'src/app/helper-service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {

  @Output() closeBottomMenu = new Subject();
  @Output() closeLateralMenu = new Subject();

  constructor(private router: Router, public helperService: HelperService) {
  }

  // timeoutHandler;
  currentHoldingLink: String = '';

  // public mouseUpMenu(event) {
  //   if (this.timeoutHandler) {
  //     clearTimeout(this.timeoutHandler);
  //     this.currentHoldingLink = '';
  //     console.log('canceled');
  //     this.timeoutHandler = null;
  //   }
  // }

  isRouteActive(route: any): boolean {
    return this.router.url.indexOf(route) > -1;
  }

  getMenuItems() {
    // return this.contentService.appContent.menuItems.length ? this.contentService.appContent.menuItems : [];
  }

  getCurrentLangage() {
    // return this.contentService.getCurrentLangage();
  }

  public mouseDownMenu(event: any, routeName: string) {

    // this.router.navigate([routeName]);
    // this.closeLateralMenu.next();
    // localStorage.setItem('lastMovement', new Date().getTime().toString());
    // event.preventDefault();
    // if (routeName !== this.getCurrentRoute()) {
    //   if (this.helperService.getDevice() === environment.devices.mobile ) {
    //     this.currentHoldingLink = routeName;

    //     this.timeoutHandler = setTimeout(() => {

    //       setTimeout(() =>  {
    //         this.router.navigate([routeName]);
    //       }, 300);

    //       this.closeBottomMenu.next();
    //       this.currentHoldingLink = '';
    //       this.timeoutHandler = null;
    //     }, 1200);

    //   } else {
    //     this.router.navigate([routeName]);
    //     this.closeLateralMenu.next();
    //   }
    // }
  }

}
