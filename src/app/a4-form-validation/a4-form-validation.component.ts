import { FormGroup, FormControl , FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a4-form-validation',
  templateUrl: './a4-form-validation.component.html',
  styleUrls: ['./a4-form-validation.component.css']
})
export class A4FormValidationComponent implements OnInit {
  employeeForm : FormGroup;
  constructor(private fb:FormBuilder ) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ['',[ Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ["", [Validators.required,Validators.email]],
      // Create skills form group
      skills: this.fb.group({
        skillName: [""],
        experienceInYears: [""],
        proficiency: [""]
      })
    });
  }

  onSubmit(){
    console.log('here is detail', this.employeeForm.value)
    console.log('here is errors', this.employeeForm.get('fullName').invalid)
  }
  loadData(){
    //setValue is used to update whole form ... we can update partial form with setValue function
    // this.employeeForm.setValue({
    //   fullName:'Taimoor',
    //   email:"488taimoor@gmail.com",
    //   skills:{
    //     skillName:'MERN Stack developer',
    //     experienceInYears:"3",
    //     proficiency: "b"
    //   }
    // })

     //patcValue function is used to update partial form...
     this.employeeForm.patchValue({
      fullName:'Taimoor',
      email:"488taimoor@gmail.com",
      // skills:{
      //   skillName:'MERN Stack developer',
      //   experienceInYears:"3",
      //   proficiency: "b"
      // }
    })
  }
}
