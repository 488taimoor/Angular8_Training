import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Input() Property;
  @Output() CountEvent = new EventEmitter<number>()
  count = 0
  customerForm = new FormGroup({
    fName: new FormControl(''),
    lName: new FormControl('')

  })
  constructor() {
    console.log('here is constructor');
  }
  ngOnChanges() {
    console.log('here is ngOnChanges')
  }
  ngOnInit() {

    console.log('here is ngOnInit')
  }
  ngDoCheck() {
    console.log(" here is ngDoCheck")
  }
  Count() {
    this.count = this.count + 1;
    console.log('here is count click', this.count)
    this.CountEvent.emit(this.count);
  }

  onSubmit() {

    console.log('here is onSubmit', this.customerForm.value)
  }
}
