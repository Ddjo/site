
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SandboxComponent } from './sandbox.component';


@NgModule({
  declarations: [
    SandboxComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class SandboxModule { }
