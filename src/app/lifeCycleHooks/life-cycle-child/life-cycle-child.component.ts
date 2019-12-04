import { Component, OnInit, OnChanges, OnDestroy, DoCheck } from '@angular/core';

@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.css']
})
export class LifeCycleChildComponent implements OnInit, OnChanges, OnDestroy, DoCheck{
  count:number=0;

  constructor() {
    console.log('this is constructor')
   }

  ngOnInit() {
    console.log('this is ngOnInit')
  }
  ngOnChanges(){
    console.log('this is ngOnChanges')
  }
  ngDoCheck(){
    console.log('this is ngOnDoCheck')
  }
  ngOnDestroy(){
    console.log('this is ngOnDestroy')
  }
  
  increament()
{
  this.count=this.count+1;
}  

}
