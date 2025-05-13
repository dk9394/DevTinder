import { Injectable } from '@angular/core';

import { Api } from './api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  auth: Api;

  constructor(private http: HttpClient) {
    this.auth = new Api(this.http, '');
  }
}
