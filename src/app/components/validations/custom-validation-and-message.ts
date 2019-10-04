import { Validators } from '@angular/forms';
export class CustomValidationAndMessage {
    static createValidator(field: string, key: any) {
        // console.log(key);
        const validateby = key.validator;
        if (key.name === 'required') {
            key.validator = Validators.required;
            if (!key.message || key.message === '') {
                key.message = field + ' is required';
            }
        }
        if (key.name === 'pattern') {
            key.validator = Validators.pattern(validateby);
            if (!key.message || key.message === '') {
                key.message = field + ' does not match the pattern';
            }
        }
        if (key.name === 'min') {
            key.validator = Validators.minLength(validateby);
            if (!key.message || key.message === '') {
                key.message = field + ' cannot be less than ' + validateby;
            }
        }
        if (key.name === 'max') {
            key.validator = Validators.maxLength(validateby);
            if (!key.message || key.message === '') {
                key.message = field + ' cannot be greater than ' + validateby;
            }
        }
        if (key.name === 'minLength' || key.name === 'minlength') {
            key.validator = Validators.minLength(key.validator);
            if (!key.message || key.message === '') {
                key.message = field + ' must be longer than ' + validateby + ' characters.';
            }
        }
        if (key.name === 'maxLength' || key.name === 'maxlength') {
            key.validator = Validators.maxLength(key.validator);
            if (!key.message || key.message === '') {
                key.message = field + ' must be shorter than ' + validateby + ' characters.';
            }
        }
    }
}