import { FormGroup, FormControl , FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import FormsHandler from './shared/FormsHandler'
// import {customValidator} from './shared/custom-validator'

@Component({
  selector: 'app-a15-complete-structurefor-validation',
  templateUrl: './a15-complete-structurefor-validation.component.html',
  styleUrls: ['./a15-complete-structurefor-validation.component.css']
})
export class A15CompleteStructureforValidationComponent implements OnInit {

  employeeForm : FormGroup;
  constructor(private fb:FormBuilder ) { }
  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ['',[ Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ["", [Validators.required,Validators.email]],
    });

  }
  onSubmit(){
    FormsHandler.validateForm(this.employeeForm)
    if(this.employeeForm.invalid) return;
    console.log('this is valid form', this.employeeForm.value)
  }

}

