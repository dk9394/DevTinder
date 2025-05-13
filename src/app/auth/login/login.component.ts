import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ApiService } from '../../shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      emailId: this.fb.control('todd@gmail.com'),
      password: this.fb.control('Todd@123'),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.apiService.auth
        .post('/login', this.loginForm.value)
        .pipe()
        .subscribe(
          (response: any) => {
            console.log('Login successful', response);
          },
          (error) => {
            console.error('Login failed', error);
          }
        );
    } else {
      console.log('Form is invalid');
    }
  }
}
