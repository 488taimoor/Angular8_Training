import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiModuleComponent } from './multi-module/multi-module.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { DirectiveModuleModule } from '../directive-module/directive-module.module';



@NgModule({
  declarations: [MultiModuleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DirectiveModuleModule

  ],
  exports:[
    MultiModuleComponent
  ]
})
export class MultiModule { }
