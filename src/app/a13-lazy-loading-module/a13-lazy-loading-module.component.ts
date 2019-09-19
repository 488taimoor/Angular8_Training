import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a13-lazy-loading-module',
  templateUrl: './a13-lazy-loading-module.component.html',
  styleUrls: ['./a13-lazy-loading-module.component.css']
})
export class A13LazyLoadingModuleComponent implements OnInit {
number=0;
  constructor() { }

  ngOnInit() {
  }
  onclick(){
    if(this.number==0){
      console.log('here is number', this.number)
      return;
    }
    console.log('after returning')
  }
}
