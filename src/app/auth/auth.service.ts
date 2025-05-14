import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../app-services/api.service';
import { ILoginCredentials, ILoginResponse } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  login(credentials: ILoginCredentials): Observable<ILoginResponse> {
    return this.apiService.auth.post('/login', credentials);
  }

  signup(credentials: ILoginCredentials): Observable<ILoginResponse> {
    return this.apiService.auth.post('/login', credentials);
  }

  logout(): Observable<ILoginResponse> {
    return this.apiService.auth.post('/logout', null);
  }
}
