import { Component, ViewChild, HostListener, Renderer2,
  ElementRef, ComponentFactoryResolver, ViewContainerRef, OnInit } from '@angular/core';
// import { RouterOutlet, Router, NavigationStart, NavigationEnd, RouteReuseStrategy } from '@angular/router';
import { slideInAnimation } from './animations';
// import { ContentService } from './shared/content/content.service';
import { HelperService } from './helper-service';
// import { NotificationModalComponent } from './shared/modals/notification-modal/notification-modal.component';
// import { ContactModalComponent } from './shared/modals/contact-modal/contact-modal.component';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ],
})
export class AppComponent implements OnInit {

  @ViewChild('modalBackdrop', {static: false}) modalBackdrop?: ElementRef;
  @ViewChild('modalcontainer', { read: ViewContainerRef, static: false }) modalContainer?: ViewContainerRef;
  @ViewChild('modalBlock', {static: false}) modalBlock?: ElementRef;


  modalDisplayed = false;
  introComplete = false;
  limitDoubleClickBackdrop = false;
  codeInvocationPequenioAnimal = [1, 1, 2, 2];
  codeTry: number[] = [];
  lateralMenuHidden = true;
  displayContentOverlay = false;
  pequenioAnimalInvocationCount = 0;
  pequenioAnimalInvoqued = false;
  pequenioAnimalleaving = false;

  constructor(
    // private router: Router,
    private renderer: Renderer2,
    private resolver: ComponentFactoryResolver,
    // private contentService: ContentService,
    public helperService: HelperService) {

      helperService.modalDisplayed.subscribe((modalToDisplay) => {

        if (!this.limitDoubleClickBackdrop) {
          if (modalToDisplay) {
            this.modalDisplayed = true;

            setTimeout(() => {
              // this.renderer.addClass(this.modalBackdrop?.nativeElement, 'displayed');
              // const factory = this.resolver.resolveComponentFactory(this.getModalComponent(modalToDisplay));
              // this.componentRef = this.modalContainer.createComponent(factory);
              // this.renderer.addClass(this.componentRef.location.nativeElement, 'modal-container');
            });
          } else {
            this.closeModal();
          }
        }

        this.limitDoubleClickBackdrop = true;

        setTimeout(() => {
          this.limitDoubleClickBackdrop = false;
          }, 720);
      });

      // Check when was the user's last movement. If it's later than the setting propriety, load the intro
      // const lastMovement = +localStorage.getItem('lastMovement');
      // const dateNow = new Date().getTime();
      // const timeDiff = environment.minutesBeforeShowIntroAgain * 60 * 1000;

      // if ((dateNow - lastMovement) > timeDiff) {
      if (environment.production) {
        this.introComplete = false;
        // this.router.navigate(['']);
      } else {
        this.introComplete = true;
      }
    //  } else {
    //   this.introComplete = true;
    //  }

  }

  ngOnInit() {
    // Remove the intro component 5 seconds afer the beginning
    setTimeout(() => {
      this.introComplete = true;
    }, 5500);
  }

  getModalComponent(modalName: string) {
    switch (modalName) {
        // case 'notification-modal' :
        //     return NotificationModalComponent;

        // case 'contact-modal' :
        //     return ContactModalComponent;
    }
  }

  closeModal() {
    // if (!this.limitDoubleClickBackdrop) {
    //   this.renderer.removeClass(this.modalBackdrop.nativeElement, 'displayed');
    //   this.renderer.addClass(this.modalBlock.nativeElement, 'hidden');
    //   setTimeout(() => {
    //     this.componentRef.destroy();
    //     this.modalDisplayed = false;
    //     this.limitDoubleClickBackdrop = false;
    //     }, 720);
    //   this.limitDoubleClickBackdrop = true;
    // }
  }

  toggleLateralMenu(event: boolean) {
    if (!event) {
      this.displayContentOverlay = true;
    } else {
      setTimeout(() => {
        this.displayContentOverlay = false;
      }, 500);
    }

    setTimeout(() => {
      this.lateralMenuHidden = event;
    });
  }

  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }

  afficherModal() {
    return localStorage.getItem('modal') !== 'ok';
  }

  removeModal() {
    localStorage.setItem('modal', 'ok');
  }

  isSinglePageApp() {
    return this.helperService.isSinglePageApp();
  }

  invoquePequenioAnimal(number: number) {

    if (!this.pequenioAnimalInvoqued) {
      if (this.codeInvocationPequenioAnimal[this.codeTry.length] === number) {
        this.codeTry.push(number);
      } else {
        this.codeTry = [];
      }

      if (JSON.stringify(this.codeTry) === JSON.stringify(this.codeInvocationPequenioAnimal)) {
          this.pequenioAnimalleaving = false;
          this.pequenioAnimalInvoqued = true;
          this.codeTry = [];
      }
    } else {
      this.removePequenioAnimal();
    }
  }

  isContent() {
    // return this.contentService.isContent();
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (this.pequenioAnimalInvoqued) {
      if (!event.target.closest('.pequenio-animal') && !event.target.closest('.brand' )) {
        this.removePequenioAnimal();
      }
    }
  }

  removePequenioAnimal() {
    this.pequenioAnimalleaving = true;

    setTimeout(() => {
      this.pequenioAnimalInvoqued = false;
    }, 2700);
  }
}
