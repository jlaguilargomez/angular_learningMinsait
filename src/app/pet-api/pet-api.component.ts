import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-api',
  templateUrl: './pet-api.component.html',
  styleUrls: ['./pet-api.component.scss']
})
export class PetApiComponent implements OnInit {

  key: string = 'zVWKXvkjmcCXiRtGoFerTj5iQbcmwKn2EdILlqyEgLj5vPI7Hc';
  secret: string = 'EUghkhG2RhKJ6I3euP8Zru9LRj3vEWmSxuC6eGOY';
  dataAccess: string;
  dataType: string;
  org = 'RI77';
  status = 'adoptable';

  constructor() { }

   ngOnInit() {
    let thing = fetch('https://api.petfinder.com/v2/oauth2/token', {
      method: 'POST',
      body: 'grant_type=client_credentials&client_id=' + this.key + '&client_secret=' + this.secret,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
	    }
    })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      this.dataAccess = data.token_type;
      this.dataType = data.access_token;

      return fetch('https://api.petfinder.com/v2/animals?organization=' + this.org + '&status=' + this.status, {
        headers: {
          'Authorization': this.dataAccess + ' ' + this.dataType,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.animals[3]);
      });
    });

    

  }

}
