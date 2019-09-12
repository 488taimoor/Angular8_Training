import { FormGroup, FormControl , FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a3-form-builder',
  templateUrl: './a3-form-builder.component.html',
  styleUrls: ['./a3-form-builder.component.css']
})
export class A3FormBuilderComponent implements OnInit {
  employeeForm : FormGroup;
  constructor(private fb:FormBuilder ) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: [""],
      email: [""],
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
