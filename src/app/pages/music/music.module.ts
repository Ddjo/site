
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { ScalesComponent } from './scales/scales.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MusicComponent,
    ScalesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    MusicComponent
  ],
})
export class MusicModule { }
