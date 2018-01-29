import {RegistrationFormModel, RegistrationModel} from './registration.model';
import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {NgForm, FormGroup} from '@angular/forms';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  public registrationModel: RegistrationModel;
  public controls: FormGroup;
// serializedDate = new FormControl((new Date()).toISOString());
  constructor() {}

  ngOnInit() {
    this.controls = new FormGroup({
      firstName: RegistrationFormModel.firstNameControl,
      lastName: RegistrationFormModel.lastNameControl,
      birthDate: RegistrationFormModel.birthDateControl,
      country: RegistrationFormModel.countryControl,
      city: RegistrationFormModel.cityControl,
      email: RegistrationFormModel.emailControl,
      phoneNumber: RegistrationFormModel.phoneNumberControl
    });
    this.registrationModel = new RegistrationModel;
  }

  register(registrationForm: NgForm) {
    console.log(this.registrationModel);
  }

}
