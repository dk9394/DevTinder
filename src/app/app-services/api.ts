import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  baseUrl: string = 'http://localhost:3000';

  headers = { 'Content-Type': 'application/json' };

  private setHeaders(customHeaders = {}): HttpHeaders {
    return new HttpHeaders({
      ...this.headers,
      ...customHeaders,
    });
  }

  constructor(
    private http: HttpClient,
    @Inject('COLLECTION') private collection: string,
    @Inject('HEADERS') private customHeaders: HttpHeaders
  ) {}

  get<T>(endpoint: string = ''): Observable<T> {
    return this.http.get<T>(this.setUrl(endpoint), {
      headers: this.setHeaders(this.customHeaders),
      withCredentials: true,
    });
  }

  post<T>(endpoint: string = '', payload: any): Observable<T> {
    return this.http.post<T>(this.setUrl(endpoint), payload, {
      headers: this.setHeaders(this.customHeaders),
      withCredentials: true,
    });
  }

  put<T>(endpoint: string = '', payload: any): Observable<T> {
    return this.http.put<T>(this.setUrl(endpoint), payload, {
      headers: this.setHeaders(this.customHeaders),
      withCredentials: true,
    });
  }

  patch<T>(endpoint: string = '', payload: any): Observable<T> {
    return this.http.patch<T>(this.setUrl(endpoint), payload, {
      headers: this.setHeaders(this.customHeaders),
      withCredentials: true,
    });
  }

  delete<T>(endpoint: string = ''): Observable<T> {
    return this.http.delete<T>(this.setUrl(endpoint), {
      headers: this.setHeaders(this.customHeaders),
      withCredentials: true,
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
