import { Component, ElementRef, HostListener, ViewChild, Renderer2 } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-location',
  templateUrl: './nav-location.component.html',
  styleUrls: ['./nav-location.component.scss']
})
export class NavLocationComponent {

  mapToggled = false;
  mail: string = environment.mail;
  adress: string = environment.adress;
  phoneNumber: string = environment.phoneNumber;
  unclickableToolTip = false;

  @ViewChild('tooltipGoogleMap', {static: false}) tooltipGoogleMap!: ElementRef;
  @ViewChild('arrow', {static: false}) arrow!: ElementRef;

  constructor(private eRef: ElementRef, private renderer: Renderer2) {}


  toggleToolTipGoogleMaps() {
    if (this.mapToggled && !this.unclickableToolTip) {
      this.closeToolTipGoogleMaps();
    } else {
      this.mapToggled = true;
      this.unclickableToolTip = true;
    }

    setTimeout(() => {
      this.unclickableToolTip = false;
    }, 400);
  }

  closeToolTipGoogleMaps() {
    this.unclickableToolTip = true;
    this.renderer.removeClass(this.tooltipGoogleMap.nativeElement, 'open');
    this.renderer.addClass(this.tooltipGoogleMap.nativeElement, 'close');
    this.renderer.addClass(this.arrow.nativeElement, 'open');
    this.renderer.addClass(this.arrow.nativeElement, 'close');
    setTimeout(() => {
      this.mapToggled = false;
      this.unclickableToolTip = false;
    }, 400);
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (this.mapToggled && !this.unclickableToolTip) {
      if (!event.target.closest('.tooltip-google-maps')) {
        this.closeToolTipGoogleMaps();
      }
    }
  }
}
