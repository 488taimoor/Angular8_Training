import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StoreModule} from '@ngrx/store'


import { HeroesComponent } from './../heroes/heroes.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HeroDetailComponent } from './../hero-detail/hero-detail.component';
import {Heroes_Reducer} from './state/heroes.reducer';



@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('heroes',Heroes_Reducer)
  ],
  exports:[
    HeroesComponent,
    HeroDetailComponent
  ]
})
export class HeroesModule { }
