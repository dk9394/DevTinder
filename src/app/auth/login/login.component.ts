import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ApiService } from '../../core/services/api.service';
import { UserService } from '../../shared/services/user.service';
import { IUserResponse, User } from '../../shared/models/user.model';
import { catchError, take, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

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
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  get emailIdField() {
    return this.loginForm.get('emailId')!;
  }

  get passwordField() {
    return this.loginForm.get('password')!;
  }

  showFieldError(field: AbstractControl): boolean {
    return (field?.touched || field?.dirty) && !field?.valid;
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      emailId: this.fb.control('todd@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      password: this.fb.control('Todd@123', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.apiService.auth
        .post('/login', this.loginForm.value)
        .pipe(
          take(1),
          catchError((error) => {
            return throwError(() => error);
          })
        )
        .subscribe((response: IUserResponse) => {
          console.log('Login response:', response);
          const user = new User(response);
          this.userService.setCurrentUser(user);
          this.apiService.setTokenAndExpiry(response.expiresAt);
          this.router.navigate(['../../feeds'], {
            relativeTo: this.route,
          });
        });
    } else {
      console.log('Form is invalid');
    }
  }

  // onToastShow() {
  //   const myToastEl = document.getElementById('myToast');
  //   myToastEl.addEventListener('hidden.bs.toast', function () {
  //     // do something...
  //   });
  //   console.log('Toast is shown');
  // }
}
