import { FormGroup, FormControl , FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-multi-module',
  templateUrl: './multi-module.component.html',
  styleUrls: ['./multi-module.component.css']
})
export class MultiModuleComponent implements OnInit {

  employeeForm : FormGroup;
  constructor(private fb:FormBuilder ) { }
  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ['',[ Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ["", [Validators.required,Validators.email]],
    });

  }
  onSubmit(){
    if(this.employeeForm.invalid) return;
    console.log('this is valid form', this.employeeForm.value)
  }

}

