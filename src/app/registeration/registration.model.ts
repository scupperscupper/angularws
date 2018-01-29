import {OnInit} from '@angular/core';
import {FormGroup, FormControl, ValidationErrors, RequiredValidator, Validators, AbstractControl, AsyncValidatorFn} from '@angular/forms';

export class RegistrationFormModel {

  public static firstNameControl = new FormControl('', Validators.required);
  public static lastNameControl = new FormControl('', Validators.required);
  public static birthDateControl = new FormControl('', [Validators.required, RegistrationFormModel.birthYearValidator]);
  public static countryControl = new FormControl('', Validators.required);
  public static cityControl = new FormControl('', Validators.required);
  public static emailControl = new FormControl('', [Validators.required, Validators.email]);
  public static phoneNumberControl = new FormControl('', [Validators.required, RegistrationFormModel.telephoneNumberValidator]);

  static birthYearValidator(c: FormControl): ValidationErrors {
    const serializedDate = new Date(c.value);
    const numValue = serializedDate.getFullYear();
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 85;
    const maxYear = currentYear - 18;
    const isValid = !isNaN(numValue) && numValue >= minYear && numValue <= maxYear;
    const message = {
      'years': {
        'message': 'The year must be a valid number between ' + minYear + ' and ' + maxYear
      }
    };
    return isValid ? null : message;
  }

  static telephoneNumberValidator(c: FormControl): ValidationErrors {
    const isValidPhoneNumber = /^\d{3,3}-\d{3,3}-\d{3,3}$/.test(c.value);
    const message = {
      'telephoneNumber': {
        'message': 'The phone number must be valid (XXX-XXX-XXX, where X is a digit)'
      }
    };
    return isValidPhoneNumber ? null : message;
  }

}

export class RegistrationModel {

  constructor(
    public firstName?: string,
    public lastName?: string,
    public birthDate?: string,
    public city?: string,
    public country?: string,
    public email?: string,
    public phoneNumber?: string
  ) {

  }

}



