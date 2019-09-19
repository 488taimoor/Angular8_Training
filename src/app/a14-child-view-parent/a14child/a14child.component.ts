import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a14child',
  templateUrl: './a14child.component.html',
  styleUrls: ['./a14child.component.css']
})
export class A14childComponent implements OnInit {
  count:number=0;
  constructor() { }

  ngOnInit() {
  }
  increament(){
    this.count +=1;
  }
  decrement(){
    this.count -=1;
  }

}
