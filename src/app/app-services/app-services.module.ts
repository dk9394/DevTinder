import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './api.service';
import { UserService } from './user.service';
import { GlobalErrorHandlerService } from './global-error-handler.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [UserService, ApiService, GlobalErrorHandlerService],
})
export class AppServicesModule {}
