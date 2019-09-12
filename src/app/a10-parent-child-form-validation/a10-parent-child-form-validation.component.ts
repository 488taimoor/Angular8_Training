import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import {customValidator} from '../a9-reuse-custom-validation/shared/custom-validator'

@Component({
  selector: 'app-a10-parent-child-form-validation',
  templateUrl: './a10-parent-child-form-validation.component.html',
  styleUrls: ['./a10-parent-child-form-validation.component.css']
})
export class A10ParentChildFormValidationComponent implements OnInit {

  


  formErrors = {
    'email': '',
    'password': '',
    'errorMessage':'',
    'phone1':'',
    'phone2':''
  };

  // This object contains all the validation messages for this form
  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'email':'Enter a correct Email',
      'emailDomain':'Email should be with hotmail domain',
      'noWhitespace':'white spaces are not allowed'
    },
    'password': {
      'required': 'Password is required.',
      'noWhitespace':'Enter a correct Email'
    },
    'phone1':{
      'required':'its required.',
      'email':'Enter a correct Email',
      'noWhitespace':'white spaces are not allowed'
    },
    'phone2':{
      'required':'its required.'
    }
    
  };
  userForm: FormGroup;
  loader: boolean = false;

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.userForm = this.fb.group({
      email: ['',[Validators.required,Validators.email, customValidator.noWhitespace]],
      password: ['', [Validators.required, customValidator.noWhitespace]],
      phoneNumbers: this.fb.group({
        phone1:['', [Validators.required, Validators.email,customValidator.noWhitespace]],
        phone2:['', [Validators.required]],
      })
    })
    this.userForm.valueChanges.subscribe((data) => {
      this.formErrors.errorMessage=''
      this.logValidationErrors(this.userForm);
    });
    // this.handleSubmit()
  }
  logValidationErrors(group: FormGroup = this.userForm): void {
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
}
