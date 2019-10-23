import { isString } from "util";
import { FormGroup, NgModel, FormControl, FormArray } from "@angular/forms";

export default class FormsHandler {

    /**
     * this method is use to validate Form
     * @param formErrors string 
     * @param form  form instance | object
     * @return errors as string
     * @author  Mukhtiar Hussain <muhammad.mukhtiar@whitehats.ae>
     **/

     
    static validateForm(form, status = 'touched') {
        const ngModel = form instanceof NgModel;
        if (ngModel) {
            FormsHandler.setControl(form.control, status);
        } else {
            FormsHandler.setControl(form, status);
            Object.keys(form.controls).forEach(field => {
                const control = form.get(field);
                if (control instanceof FormControl) {
                    FormsHandler.setControl(control, status);
                } else if (control instanceof FormGroup) {
                    FormsHandler.validateForm(control, status);
                } else if (control instanceof FormArray) {
                    const arrLength = control.controls.length;
                    for (var i = 0; i < arrLength; i++) {
                        FormsHandler.validateForm(control.controls[i], status);
                    }
                }
            });
        }
    }

    static setControl(control, status = 'touched') {
        status === 'touched'
            ? control.markAsTouched({ onlySelf: true })
            : control.markAsDirty({ onlySelf: true });
    }

    /**
      * this method is use to validate Form Array
      * @param formErrors string 
      * @param form  form instance | object
      * @return errors as string
      * @author  Mukhtiar Hussain <muhammad.mukhtiar@whitehats.ae>
      **/
    static validateFormArray(form) {
        if (form.valid) {
            return true;
        } else {
            if (form.controls) {
                for (const group in form.controls) {
                    const groupFiled = form.get(group) as FormGroup;
                    for (const field in groupFiled.controls) {
                        const control = groupFiled.get(field);
                        if (control.invalid) {
                            control.markAsTouched({ onlySelf: true });
                        }
                    }
                }
            }
            return false;
        }
    }

    static deleteEmptyFileds(data) {
        if (data) {
            for (const key in data) {
                if (data[key] == '' || data[key] == null) {
                    delete data[key];
                }
                if (data[key] && isString(data[key])) {
                    data[key] = data[key].trim();
                }
            }
            return data;
        }
    }

    static invalidTabIndex(crudForm) {
        let selectedTab = 0;
        let tabs = ['detail', 'questionaires', 'participants', 'researchers', 'data', 'status']
        for (let item in crudForm.controls) {
            const invalid = crudForm.controls[item].invalid;
            if (invalid) {
                selectedTab = tabs.findIndex(t => t == item);
                break;
            }
        }
        return selectedTab;
    }

    /**
        * this method is use to conert string type number to number  
        * @param data object 
        * @return data object 
        * @author  Mukhtiar Hussain <muhammad.mukhtiar@whitehats.ae>
        **/
    static toNumber(data) {
        for (const key in data) {
            const numberKeys = 'start_range,end_range,start_value,end_value,interval,count,minimum_interaction,cancel_interaction_after,interaction';
            if (numberKeys.includes(key)) {
                data[key] = +data[key];
            }
        }
        return data;
    }


}