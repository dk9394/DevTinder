import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  baseUrl: string = 'http://localhost:3000';
  token: string = '';
  expiresAt: Date | null = null;
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  constructor(
    private http: HttpClient,
    @Inject('COLLECTION') private collection: string
  ) {}

  setTokenAndExpiry(expiresAt: string) {
    const cookies = document.cookie.split('; ');
    const tokenCookie = cookies.find((row) => row.startsWith('token='));
    this.token = tokenCookie ? tokenCookie.split('=')[1] : '';
    this.expiresAt = new Date(expiresAt);

    this.headers = new HttpHeaders({
      ...this.headers,
      Authorization: 'Bearer ' + this.token,
    });
  }

  get<T>(endpoint: string = ''): Observable<T> {
    return this.http.get<T>(this.setUrl(endpoint), {
      headers: this.headers,
    });
  }

  post<T>(endpoint: string = '', payload: T): Observable<T> {
    return this.http.post<T>(this.setUrl(endpoint), payload, {
      headers: this.headers,
    });
  }

  put<T>(endpoint: string = '', payload: T): Observable<T> {
    return this.http.put<T>(this.setUrl(endpoint), payload, {
      headers: this.headers,
    });
  }

  patch<T>(endpoint: string = '', payload: T): Observable<T> {
    return this.http.patch<T>(this.setUrl(endpoint), payload, {
      headers: this.headers,
    });
  }

  delete<T>(endpoint: string = ''): Observable<T> {
    return this.http.delete<T>(this.setUrl(endpoint), {
      headers: this.headers,
    });
  }

  private setUrl(endpoint: string): string {
    const url = this.baseUrl + this.collection;
    if (!endpoint) {
      return url;
    }
    return url + endpoint;
  }
}
