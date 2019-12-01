import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  
  constructor(private http: HttpClient) {}

  getFilms() {
    return this.http.get('https://api.myjson.com/bins/v1p7u');
  };
  
}
