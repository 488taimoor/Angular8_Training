import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() userForm: FormGroup;
  @Input() validationMessages;
  @Input() formErrors;
  constructor() { }

  ngOnInit() {
    console.log('these are errors ', this.formErrors.value)
  }

}
