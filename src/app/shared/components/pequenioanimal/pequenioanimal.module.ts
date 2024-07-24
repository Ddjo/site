
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PequenioAnimalComponent } from './pequenioanimal.component';


@NgModule({
  declarations: [
    PequenioAnimalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    PequenioAnimalComponent
  ],
  providers: [
  ],
  bootstrap: []
})
export class PequenioAnimalModule { }
