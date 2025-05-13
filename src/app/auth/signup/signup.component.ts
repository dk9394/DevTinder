import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: this.fb.control('Deepak'),
      lastName: this.fb.control('Kumar'),
      emailId: this.fb.control('deepak@gmail.com'),
      password: this.fb.control('Deepak@123'),
      confirmPassword: this.fb.control('Deepak@123'),
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      // Call your API service to handle the signup process
    } else {
      console.log('Form is invalid');
    }
  }
}
