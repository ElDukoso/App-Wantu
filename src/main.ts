import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { SheetsService } from './app/services/sheets.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Proporciona HttpClient aquí
    SheetsService,
    provideRouter(routes),
  ]
}).catch(err => console.error(err));
