import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'; // Asegúrate de tener la URL de la API en el archivo environment

@Injectable({
  providedIn: 'root'
})
export class SheetsService {
  private apiUrl = environment.apiUrl; // URL de tu API

  constructor(private http: HttpClient) {}

  // Este método ahora hace una solicitud GET a tu API
  getSpreadsheet(spreadsheetId: string) {
    return this.http.get(`${this.apiUrl}/sheets/${spreadsheetId}`);
  }
}