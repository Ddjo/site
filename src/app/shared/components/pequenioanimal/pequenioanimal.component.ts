import { Component, OnInit, Output, EventEmitter, HostListener, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pequenioanimal',
  templateUrl: './pequenioanimal.component.html',
  styleUrls: ['./pequenioanimal.component.scss']
})
export class PequenioAnimalComponent implements OnInit {

  soundNumber = 0;
  speaking = false;
  sounds = [
    './assets/pequenioanimal/sounds/papidudoso.m4a',
    './assets/pequenioanimal/sounds/ohquerico.m4a',
    './assets/pequenioanimal/sounds/papiextasis.m4a'
  ];
  imagesource = './assets/pequenioanimal/pequenioanimal.png';
  @ViewChild('pequenioanimal', {static: false}) pequenioanimal?: ElementRef;
  @Input() leaving = false;

  constructor(private renderer: Renderer2) {}


  ngOnInit() {
      const audio = new Audio();
      audio.src = './assets/pequenioanimal/sounds/ohbapapi.m4a';
      audio.load();
      audio.play();

      setTimeout(() => {
        this.renderer.removeClass(this.pequenioanimal?.nativeElement, 'arriving');
      }, 3200);
    }

    speak() {
      const audio = new Audio();
      audio.src = this.sounds[this.soundNumber];
      audio.load();
      audio.play();
      if (this.soundNumber === this.sounds.length - 1) {
        this.soundNumber = 0;
      } else {
        this.soundNumber++;
      }
      this.speaking = true;
      setTimeout(() => {
        this.speaking = false;
      }, 2000);
    }

}
