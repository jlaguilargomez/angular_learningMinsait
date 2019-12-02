import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor(private http: HttpClient) { }

  getTeams() {
    return this.http.get('http://api.football-data.org/v2/competitions', {
      headers: new HttpHeaders({
        'X-Auth-Token': '12b1ea6e158b4416a36c73ab4b5fbef5'
      })
    });
  };

}
