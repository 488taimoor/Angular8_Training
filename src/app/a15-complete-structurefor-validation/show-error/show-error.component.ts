import { Component, OnInit, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-show-error',
  template:  `
  <ng-container *ngIf="shouldShowErrors()">
      <div class="mt-0 pt-2 listerror mb-2">{{listOfErrors()}}</div>
  </ng-container>
`,
})
export class ShowErrorComponent {
  private static readonly errorMessages = {
    'required': () => 'The specified information is required.',
    'minlength': (params) => 'The min number of characters is ' + params.requiredLength,
    'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength,
    'email': () => 'Email is not valid',
    // 'max': (params) => 'The max length of this field can be ' + params.max,
    // 'min': (params) => 'The min length of this field can be ' + params.min,
    // 'pattern': (params) => 'The required pattern is: ' + params.requiredPattern,
    // 'years': (params) => params.message,
    // 'countryCity': (params) => params.message,
    // 'uniqueName': (params) => params.message,
    // 'telephoneNumbers': (params) => params.message,
    // 'telephoneNumber': (params) => params.message,
    // 'invalidNumber': () => 'The specified field can only contain numbers.',
    // 'emptySpaces': () => 'Empty Spaces are not allowed',
    // 'ngbDate': () => 'Invalid Date.Date should be greater than today date and Y-m-D format',
    // 'invalidEmailAddress': () => 'The specified information is invalid.',
    // 'invalidInputCharacters': () => 'The specified information is invalid.',
    // 'invalidUsernameCharacters': () => 'The specified information is invalid.',
    // 'invalidString': () => 'The specified information is invalid.',
    // 'invalidNumeric': () => 'The specified field can only contain numbers.',
    // 'invalidPassword': () => 'Password must contain at least 6 characters, including uppercase, lowercase and numbers.',
    // 'invalidMackAddress': () => 'Invalid Mack address.Mack address should be in this format 00:00:00:00:00:00',
    // 'invalidIp': () => 'The specified information is invalid.Shlould be valid Ip address',
    // 'invalidDomainName': () => 'The specified information is invalid.Shlould be valid Domain Name',
    // 'invalidPhone': () => 'The specified field can only contain numbers.',
    // 'invalidWhiteSpace': () => 'The specified information is invalid.',
    // 'invalidDate':()=>'End time should be greater than start time.',
    // 'invalidzero':()=>'Value should be greater than 0',
    // 'zeroValueValidator':()=>'Interval value must be greater than zero',
    // 'interactionTimeLimit':()=>'Total interactions time should be less than given time.',
    // 'cancelInteractiontimelimit':()=>'Cancel interaction time should be less than minimum interaction time.',
    // 'IntervalValidator':()=>'First value and interval value should be less than last value',
    // 'IntervalValidatorRange':()=>'Interval value should be less than from the difference of last and first value',
    // 'dateValidator':()=>'From date should be equal or less than To Date.',
    // 'swedenPhoneValidator':()=>'Please enter a valid phone number',
    // 'passwordMatch':()=>'Password and confirm password does not match.'


};

  @Input() private control: AbstractControlDirective | AbstractControl;

    shouldShowErrors(): boolean {
        return this.control && this.control.errors && (this.control.dirty || this.control.touched);
    }

    listOfErrors() {
        const errors = Object.keys(this.control.errors)
            .map(field =>this.getMessage(field, this.control.errors[field]));
        if (errors.length) {
            return errors[0];
        }
        return errors;
    }

    private getMessage(type: string, params: any) {
        return ShowErrorComponent.errorMessages[type](params);
    }

}
