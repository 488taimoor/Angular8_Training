import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a2-set-values-and-patch-values',
  templateUrl: './a2-set-values-and-patch-values.component.html',
  styleUrls: ['./a2-set-values-and-patch-values.component.css']
})
export class A2SetValuesAndPatchValuesComponent implements OnInit {

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
