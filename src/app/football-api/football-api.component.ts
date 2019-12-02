import { Component, OnInit } from '@angular/core';
import { FootballService } from '../football.service';

@Component({
  selector: 'app-football-api',
  templateUrl: './football-api.component.html',
  styleUrls: ['./football-api.component.scss']
})
export class FootballApiComponent implements OnInit {

  football;

  constructor(private footballService: FootballService) { }

  ngOnInit() {
    this.footballService.getTeams()
    .subscribe((football) => console.log(football));
  }

}
