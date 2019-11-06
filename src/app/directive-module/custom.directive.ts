import { Directive, Input} from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private ngControl: NgControl) {

  }
  @Input() set appCustom(allow: boolean){
    if (allow) {
      console.log('this is directive', allow)
    }
    const action = allow ? 'disable' : 'enable';
    this.ngControl.control[action]();
  }
    
}
