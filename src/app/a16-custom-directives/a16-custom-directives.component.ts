import { FormGroup, FormControl , FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a16-custom-directives',
  templateUrl: './a16-custom-directives.component.html',
  styleUrls: ['./a16-custom-directives.component.css']
})
export class A16CustomDirectivesComponent implements OnInit {

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
