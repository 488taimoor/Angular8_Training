import { FormGroup, FormControl , FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a5-validations-and-logics-in-component',
  templateUrl: './a5-validations-and-logics-in-component.component.html',
  styleUrls: ['./a5-validations-and-logics-in-component.component.css']
})
export class A5ValidationsAndLogicsInComponentComponent implements OnInit {

 
  employeeForm : FormGroup;
  constructor(private fb:FormBuilder ) { }
  formErrors = {
    'fullName': '',
    'email': '',
    'phone':'',
    'skillName': '',
    'experienceInYears': '',
    'proficiency': ''
  };
  
  // This object contains all the validation messages for this form
  validationMessages = {
    'fullName': {
      'required': 'Full Name is required.',
      'minlength': 'Full Name must be greater than 2 characters.',
      'maxlength': 'Full Name must be less than 10 characters.'
    },
    'email': {
      'required': 'Email is required.',
      'email':'Enter a correct Email'
    },
    'contactPreference':{
      'required': 'preference is required'
    },
    'phone':{
      'required': 'phone is required'
    },
    'skillName': {
      'required': 'Skill Name is required.',
    },
    'experienceInYears': {
      'required': 'Experience is required.',
    },
    'proficiency': {
      'required': 'Proficiency is required.',
    },
  };
  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ['',[ Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ["", [Validators.required,Validators.email]],
      contactPreference:["notrequired",Validators.required],
      phone:["",Validators.required],
      // Create skills form group
      skills: this.fb.group({
        skillName: ["",Validators.required],
        experienceInYears: ["",Validators.required],
        proficiency: ["",Validators.required]
      })
    });


    this.employeeForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.employeeForm);
    });
  }
  logValidationErrors(group: FormGroup = this.employeeForm): void {
    // Loop through each control key in the FormGroup
    Object.keys(group.controls).forEach((key: string) => {
      // Get the control. The control can be a nested form group
      const abstractControl = group.get(key);
      // If the control is nested form group, recursively call
      // this same method
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
        // If the control is a FormControl
      } else {
        // Clear the existing validation errors
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
          // Get all the validation messages of the form control
          // that has failed the validation
          const messages = this.validationMessages[key];
          // Find which validation has failed. For example required,
          // minlength or maxlength. Store that error message in the
          // formErrors object. The UI will bind to this object to
          // display the validation errors
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
          
        }
      }
    });
  }
  onSubmit(){
    console.log('here is detail', this.employeeForm)
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


 


// If the Selected Radio Button value is "phone", then add the
// required validator function otherwise remove it
onContactPrefernceChange(selectedValue: string) {
  console.log('here is on contact change', selectedValue)
  const phoneFormControl = this.employeeForm.get('phone');
  if (selectedValue === 'required') {
    phoneFormControl.setValidators(Validators.required);
  } else {
    phoneFormControl.clearValidators();
  }
  phoneFormControl.updateValueAndValidity();
}


}
