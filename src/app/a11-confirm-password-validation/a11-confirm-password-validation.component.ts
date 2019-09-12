import { FormGroup, FormControl , FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {customValidator} from '../a9-reuse-custom-validation/shared/custom-validator'

@Component({
  selector: 'app-a11-confirm-password-validation',
  templateUrl: './a11-confirm-password-validation.component.html',
  styleUrls: ['./a11-confirm-password-validation.component.css']
})
export class A11ConfirmPasswordValidationComponent implements OnInit {

 
  employeeForm : FormGroup;
  constructor(private fb:FormBuilder ) { }
  formErrors = {
    'fullName': '',
    'email': '',
    'password':'',
    'confirmPassword':'',
    'passwordGroup':''
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
      'email':'Enter a correct Email',
      'emailDomain':'Email should be with hotmail domain'
    },
    'password':{
      'required':'Password is required.',
    },
    'confirmPassword':{
      'required':'Confirm password is required',       
    },
    'passwordGroup':{
      'passwordMismatch':'password and confirm Password do not match.'
    }
    
  };
  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ['',[ Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ["", [Validators.required,Validators.email, customValidator.emailDomain('hotmail.com')]],
      passwordGroup:this.fb.group({
        password:['',[Validators.required]],
        confirmPassword:['',[Validators.required]]
      },{validator:matchpasswords})
    });


    this.employeeForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.employeeForm);
    });
  }
  logValidationErrors(group: FormGroup = this.employeeForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);

      this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.validationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
          
        }

      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
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

function emailDomain(domainName){
  return(control: AbstractControl): { [key: string]: any } | null=> {
  const email: string = control.value;
  const domain = email.substring(email.lastIndexOf('@') + 1);
  if(email === ''|| domain.toLowerCase() === domainName) {
    return null;
  } else {
    return { 'emailDomain': true };
  }
}
}
function matchpasswords(group: AbstractControl): { [key: string]: any } | null {
  const passwordControl = group.get('password');
  const confirmPasswordControl = group.get('confirmPassword');

  if (passwordControl.value === confirmPasswordControl.value || confirmPasswordControl.pristine) {
    return null;
  } else {
    return { 'passwordMismatch': true };
  }
}