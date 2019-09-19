import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { A14childComponent } from './a14child/a14child.component';

@Component({
  selector: 'app-a14-child-view-parent',
  templateUrl: './a14-child-view-parent.component.html',
  styleUrls: ['./a14-child-view-parent.component.css']
})
export class A14ChildViewParentComponent implements OnInit {
  //ElementReference variable... Through reference variable we can acces all the properties of that element.
  @ViewChild('content',{static: false }) someInput: ElementRef;
  //through this we can access all the properties, methods of child
  @ViewChild(A14childComponent,{static:false}) a14childComponent: A14childComponent
  constructor() { }

  ngOnInit() {
  }
  next(){
    this.a14childComponent.increament()
  }
  back(){
    this.a14childComponent.decrement()
  }
ngAfterViewInit(): void {
  console.log('here is childview data', this.someInput)
}
}
