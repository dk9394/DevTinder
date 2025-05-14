import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      this.handleHttpError(error);
    } else {
      this.handleGenericError(error);
    }
  }

  handleHttpError(error: any): void {
    // Handle HTTP errors
    console.log('HTTP Error:', error.error.userMessage);
    // You can add more specific error handling logic here
  }

  handleGenericError(error: any): void {
    // Handle generic errors
    console.log('Generic Error:', error.message);
    // You can add more specific error handling logic here
  }
}
