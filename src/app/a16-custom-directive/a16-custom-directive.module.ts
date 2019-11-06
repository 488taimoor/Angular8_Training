import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A16CustomDirectiveComponent } from './a16-custom-directive/a16-custom-directive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [A16CustomDirectiveComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  exports:[
    A16CustomDirectiveComponent
  ]
})
export class A16CustomDirectiveModule { }
