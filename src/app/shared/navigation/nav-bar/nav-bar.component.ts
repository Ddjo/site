import { Component, OnInit, Output, EventEmitter, HostListener, ViewChild, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HelperService } from 'src/app/helper-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  // @Output() toggledBottomMenu = new EventEmitter();
  @Output() lateralMenuHidden = new EventEmitter();
  @Output() invoquingPequenioAnimal = new EventEmitter<number>();

  // @Input() bottomMenuToggled: boolean;

  @ViewChild('soundTest', {static: false}) soundTest!: HTMLAudioElement;

  lateralBarClosed: Boolean = true;
  stickyNavBar: Boolean = true;
  hideBar = false;

  constructor(public helperService: HelperService, private router: Router, private _route: ActivatedRoute) {
    this.router.events.subscribe(value => {
      if (router.url.toString().includes('music')) {
        this.hideBar = true;
      }
  });
  }

  // navMenuToggleClick() {
  //   this.bottomMenuToggled = !this.bottomMenuToggled;
  //   this.toggledBottomMenu.emit(this.bottomMenuToggled);
  // }

  invoquePequenioAnimal(number: number) {
    this.invoquingPequenioAnimal.emit(number);
  }

  toggleLateralMenu() {
    this.lateralBarClosed = !this.lateralBarClosed;
    this.lateralMenuHidden.emit(this.lateralBarClosed);
  }

  displayContactModal() {
      this.helperService.openModal('contact-modal');
  }

  @HostListener('document:click', ['$event'])
  clickout(event : any) {
      if (event.target.closest('.content-overlay') && !this.lateralBarClosed) {
        this.toggleLateralMenu();
      }
  }
}
