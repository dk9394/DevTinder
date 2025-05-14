import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { GenericValidators } from '../../shared/validations/generic-validators';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  get firstNameField(): AbstractControl {
    return this.signupForm.get('firstName')!;
  }

  get lastNameField(): AbstractControl {
    return this.signupForm.get('lastName')!;
  }

  get emailIdField(): AbstractControl {
    return this.signupForm.get('emailId')!;
  }

  get passwordField(): AbstractControl {
    return this.signupForm.get('password')!;
  }

  get confirmPasswordField(): AbstractControl {
    return this.signupForm.get('confirmPassword')!;
  }

  showFieldError(field: AbstractControl): boolean {
    return (field?.touched || field?.dirty) && !field?.valid;
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group(
      {
        firstName: this.fb.control('Deepak', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]),
        lastName: this.fb.control('Kumar', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]),
        emailId: this.fb.control('deepak@gmail.com', [
          Validators.required,
          Validators.email,
        ]),
        password: this.fb.control('Deepak@123', [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPassword: this.fb.control(''),
      },
      {
        validators: [
          GenericValidators.crossFieldsPasswordValidator(
            'password',
            'confirmPassword'
          ),
        ],
      }
    );
  }

  onSubmit() {
    console.log(this.signupForm);
    if (this.signupForm.valid) {
      delete this.signupForm.value.confirmPassword;
      console.log(this.signupForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
