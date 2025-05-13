import { Injectable } from '@angular/core';

import { Api } from './api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  token: string = '';
  expiresAt: Date | null = null;
  headers: any = {};

  // Token is yet to be set from cookies
  setTokenAndExpiry(expiresAt: string) {
    const cookies = document.cookie.split('; ');
    const tokenCookie = cookies.find((row) => row.startsWith('token='));
    this.token = tokenCookie ? tokenCookie.split('=')[1] : '';
    this.expiresAt = new Date(expiresAt);
    this.headers = {
      Authorization: 'Bearer ' + this.token,
    };
  }

  clearToken() {
    this.token = '';
    this.expiresAt = null;
  }

  auth: Api;

  constructor(private http: HttpClient) {
    this.auth = new Api(this.http, '', this.headers);
  }
}
