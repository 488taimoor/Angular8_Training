import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a1-nested-form-group',
  templateUrl: './a1-nested-form-group.component.html',
  styleUrls: ['./a1-nested-form-group.component.css']
})
export class A1NestedFormGroupComponent implements OnInit {

  employeeForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      // Create skills form group
      skills: new FormGroup({
        skillName: new FormControl(),
        experienceInYears: new FormControl(),
        proficiency: new FormControl()
      })
    });
  }

  onSubmit(){
    console.log('here is detail', this.employeeForm.value)
  }

}
