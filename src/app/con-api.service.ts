import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { API_PATH } from 'src/environments/environment';
import { iContato } from './iContato';

@Injectable({
  providedIn: 'root',
})
export class ConApiService {
  constructor(private httpClient: HttpClient) {}

  mostrarContato() {
    return this.httpClient.get<Array<any>>(`${API_PATH}`);
  }
}
