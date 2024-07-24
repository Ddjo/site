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
export class AppComponent {


  codeInvocationPequenioAnimal = [1, 1, 2, 2];
  codeTry: number[] = [];
  lateralMenuHidden = true;
  displayContentOverlay = false;
  pequenioAnimalInvocationCount = 0;
  pequenioAnimalInvoqued = false;
  pequenioAnimalleaving = false;

  constructor(
    public helperService: HelperService) {
  }


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
