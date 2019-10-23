import { Inject, ReflectiveInjector } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
import { isString } from 'util';


export class ValidationService {


    static specialCharValidator(control) {
        if (control.value == null || control.value.match(/^[a-zA-Z0-9._]*$/)) {
            return null;
        } else {

            return { 'invalidCharacters': true };
        }
    }
    static timeDiffValidator(control) {
        let startTime = control.controls.start_time.value;
        let endTime = control.controls.end_time.value
        let numOfinteraction = control.controls.interaction.value
        let minimumInteraction = control.controls.minimum_interaction.value
        let cancelInteraction_after = control.controls.cancel_interaction_after.value
        if (startTime && endTime && numOfinteraction && minimumInteraction && cancelInteraction_after) {
            let milisecondsdiff = miliseconds1(endTime).interaction - miliseconds1(startTime).interaction;
            if (milisecondsdiff < 0) {
                let restday= 86400000 - miliseconds1(control.controls.start_time.value).interaction
                var minutes = Math.floor((restday + miliseconds1(endTime).interaction)/60000)
            }else
           {  minutes = Math.floor(milisecondsdiff / 60000)}
            let totatInteractionTime = numOfinteraction * minimumInteraction;
            if (totatInteractionTime > minutes) {
                return { 'interactionTimeLimit': true }
            } else if (cancelInteraction_after > minimumInteraction) {
                return { 'cancelInteractiontimelimit': true }
            } else {
                return null;
            }
        }
        if (control.controls.end_time.value != null && control.controls.start_time.value != null)  return null;
        

    }
    static numericQuestionValidatior(control) {
        let firstValue = control.controls.start_value.value
        let endValue = control.controls.end_value.value
        let interval = control.controls.interval.value
        
        if ((firstValue==0 || firstValue) && (endValue==0 || endValue) && interval) {
            
            if (firstValue >= endValue || endValue <= interval) {
               
                return { 'IntervalValidator': true };
            }
            else {
                if ((endValue - firstValue) < interval) {
                    return { 'IntervalValidatorRange': true };
                } else {
                    return null;
                }
            }
        } else {
            return null;
        }

    }

    static uppercaseCharacterRule(amount: number): any {
        return function validate(control): { [key: string]: any } {
            const value: string = control.value;
            if (value.length === 0) {
                return undefined;
            }
            const pattern = /[^A-Z]+/g;
            const stripped = value.replace(pattern, '');
            if (stripped.length < amount) {
                return { 'uppercaseCharacterRule': true };
            }
            return undefined;
        };
    }
    static DateValidator(control){
        
        let fromdate= control.controls.from_datetime.value;
        let todate= control.controls.to_datetime.value;
        if (fromdate!="" && todate!=""){
            if(fromdate<=todate){
                console.log('correct date')
                return null;
            }else{
                return {'dateValidator':true}
            }
        }else{
            return null;
        }
    }

    static creditCardValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return { 'invalidCreditCard': true };
        }
    }
static cPasswordValidator(control){
    let password = control.controls.password.value
    let cpassword = control.controls.cpassword.value
    if(password && cpassword && password!=null && cpassword!=null){
        if(password!=cpassword)
        return {'passwordMatch': true}
    }
    
    return null
}

    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (ValidationService.isEmptyInputValue(control.value)) return null;
        const emailLowercase = control.value.toLowerCase();
        if (control.value == null || emailLowercase.match(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }


    static isEmptyInputValue(value: any): boolean {
        // we don't check for string here so it also works with arrays
        return value == null || value.length === 0;
    }

    static emptySpacesValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value)) return null;
        if (control.value.match(/([^\s])/)) {
            return null;
        } else {
            return { 'emptySpaces': true };
        }
    }

    static removeSpace(value: any): string {
        return value.trim()
    }



    static nameValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value)) return null;
        if (control.value.match(/^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,30}$/)) {
            return null;
        } else {
            return { 'invalidNameCharacters': true };
        }
    }

    static passwordValidators(control) {
        const password: string = control.value;
        const test = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')
        if(test.test(password))
          
          return null;
           return {'passValidator':true}
          
          
          
        
      }
    static whiteSpaceValidator(control) {
        // RFC 2822 compliant regex
        if (ValidationService.isEmptyInputValue(control.value)) return null;

        if (control.value.match(/^[-a-zA-Z\u0600-\u06FF0-9-()]+(\s+[-a-zA-Z\u0600-\u06FF0-9-()]+)*$/)) {
            return null;
        } else {
            return { 'invalidWhiteSpace': true };
        }
    }



    static phoneValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value)) return null;
        if (control.value.match(/^\+?[0-9]+$/g)) {
            return null;
        } else {
            return { 'invalidPhone': true };
        }
    }
    static swedenPhoneValidator(control){
        if (ValidationService.isEmptyInputValue(control.value) ) return null;
        if (control.value.match(/^\+?(?=.*[0-9])[ 0-9]+$/)) {
            return null;
        } else {
            return { 'swedenPhoneValidator': true };
        }
    }



    static usernameValidator(control) {
        // RFC 2822 compliant regex
        if (ValidationService.isEmptyInputValue(control.value)) return null;
        if (control.value == null || control.value.match(/^[a-zA-Z0-9]+$/)) {
            return null;
        } else {
            return { 'invalidUsernameCharacters': true };
        }
    }

    static passwordValidator(control) {
        console.log('confirmPasswordValidator 0', control);
        // {8,100}           - Assert password is between 8 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value && !ValidationService.uppercaseCharacterRule(1)(control) && control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }

    static confirmPasswordValidator(control: AbstractControl): { [key: string]: any } {
        const [first, ...rest] = Object.keys(control.value || {});
        let valid = true;
        if (rest.length == 1) {
            if (control.get(rest[0]).dirty) valid = rest.every(v => control.value[v] === control.value[first]);
        }
        else if (control.get(rest[1]).dirty) valid = rest.every(v => control.value[v] === control.value[rest[0]]);
        const error = valid ? null : { 'passworMismatch': true };

        console.log(error);

        return error;
    }

    static pinCodeValidator(control) {
        if (control.value && control.value.match(/^[0-9]{4}$/)) {
            return null;
        } else {
            return { 'invalidPinCode': true };
        }
    }


    static trimData(data) {
        if (data) {
            for (const key in data) {
                if (data[key] && isString(data[key])) {
                    data[key] = data[key].trim();
                }
            }
            return data;
        }
    }

    static checkInteger(control) {
        if (ValidationService.isEmptyInputValue(control.value)) return null;

        if (parseFloat(control.value) == 0 || (parseFloat(control.value) || parseInt(control.value)) && !isNaN(control.value)) {
            return null;
        } else {
            return { 'invalidNumber': true };
        }
    }

    static alphnumericValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value)) return null;
        if (control.value.match(/^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
            return null;
        } else {
            return { 'invalidInputCharacters': true };
        }
    }

    static alphValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value)) return null;
        if (control.value.match(/^\+?[A-Za-z]+$/g)) {
            return null;
        } else {
            return { 'invalidString': true };
        }
    }

    static numericValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value)) return null;
        const value = control.value.toString()
        if (value.match(/^\+?[0-9]+$/g)) {
            return null;
        } else {
            return { 'invalidNumeric': true };
        }
    }

    static numericValidatorExcludingZero(control) {
        if (ValidationService.isEmptyInputValue(control.value)) return null;
        const value = control.value.toString()
        if (value.match(/^\+?[0-9]+$/g)) {
            if (value < 1)
                return { 'invalidzero': true };
            return null;

        } else {
            return { 'invalidNumeric': true };
        }
    }


    static newNameValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value)) return null;
        if (control.value.match(/(?!^ +$)^.+$/)) {
            return null;
        } else {
            return { 'invalidString': true };
        }

    }

}
function miliseconds1(time) {
    var timeParts = time;
    const timemil = ((+timeParts.hour * 60 * 60 + +timeParts.minute * 60) * 1000);
    const rawTime = { rawTime: time };
    const rawTimeq = { interaction: timemil, ...rawTime };
    return rawTimeq
}