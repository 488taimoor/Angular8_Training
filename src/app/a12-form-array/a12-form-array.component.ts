import { FormGroup, FormArray , FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {customValidator} from '../a9-reuse-custom-validation/shared/custom-validator'

@Component({
  selector: 'app-a12-form-array',
  templateUrl: './a12-form-array.component.html',
  styleUrls: ['./a12-form-array.component.css']
})
export class A12FormArrayComponent implements OnInit {  

 
  employeeForm : FormGroup;
  constructor(private fb:FormBuilder ) { }
  formErrors = {
    'fullName': '',
    'email': '',
    'password':'',
    'confirmPassword':'',
    'passwordGroup':'',
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
    },
      // 'skillName':{
      //   'required': 'skill name is required.'
      // }
    
    
  };
  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ['',[ Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ["", [Validators.required,Validators.email, customValidator.emailDomain('hotmail.com')]],
      passwordGroup:this.fb.group({
        password:['',[Validators.required]],
        confirmPassword:['',[Validators.required]]
      },{validator:matchpasswords}),
      skills:this.fb.array([
        this.addSkillFormGroup()
      ])
      
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
      //for formGroup 
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
      //for formArray
      // if (abstractControl instanceof FormArray) {
      //   for (const control of abstractControl.controls) {
      //     if (control instanceof FormGroup) {
      //       this.logValidationErrors(control);
      //     }
      //   }
      // } 

    });
  }
  onSubmit(){
    console.log('here is detail', this.employeeForm)
    console.log('here is errors', this.employeeForm.get('fullName').invalid)
  }
  addSkillButtonClick(){
    // <FormArray is used for typecaseting(conversing)
    (<FormArray>this.employeeForm.get('skills')).push(this.addSkillFormGroup())
  }
  addSkillFormGroup(): FormGroup {
    return this.fb.group({
      skillName: ['', Validators.required]
    });
  }
  removeSkillButtonClick(skillGroupIndex: number): void {
    (<FormArray>this.employeeForm.get('skills')).removeAt(skillGroupIndex);
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
