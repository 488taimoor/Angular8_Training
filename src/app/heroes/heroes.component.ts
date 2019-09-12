import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { HEROES } from './../mock-heroes';
import {Store} from '@ngrx/store'
import {Heroes_Actions} from './state/heroes.actions'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero;
  testProperty = 0;
  constructor( private store :Store<any>) {
  }

  ngOnInit() {
    // this.store.dispatch({type:Heroes_Actions.Heros_Add.NEW})
     this.store.subscribe(store=>console.log('store Detail', store))
  }
  












  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log('here is selected hero', this.selectedHero)
  }
  onCount(c: number) {
    this.testProperty = c;
  }

}
