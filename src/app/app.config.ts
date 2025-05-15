import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { AppServicesModule } from './app-services/app-services.module';
import { CoreModule } from './core/core.module';
import { AuthGuard } from './auth/auth.guard';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    AppServicesModule,
    CoreModule,
    AuthGuard,
    provideHttpClient(),
  ],
};
