import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiURL: 'http://localhost:3003/';

  constructor(private httpClient: HttpClient) { }

}
