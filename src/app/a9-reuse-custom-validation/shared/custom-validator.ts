import { AbstractControl } from '@angular/forms';
export class customValidator{
    static emailDomain(domainName){
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

      static noWhitespace(control: AbstractControl): { [key: string]: any } | null {
        let isWhitespace = (control.value || '').trim().length === 0;
        let isValid = !isWhitespace;
        return isValid ? null : { 'noWhitespace': true }
      }
}