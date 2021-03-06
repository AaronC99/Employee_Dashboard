import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiURL = 'http://localhost:3003';

  constructor(private httpClient: HttpClient) { }

  getAllEmployeeData() {
    return this.httpClient.get(`${this.apiURL}/api/attendance`).toPromise();
  }
  getPendingData() {
    return this.httpClient.get(`${this.apiURL}/api/pending`).toPromise();
  }
  getPListEmployeeData() {
    return this.httpClient.get(`${this.apiURL}/api/listEmployee`).toPromise();
  }
}
