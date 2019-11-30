import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { FilmInterface } from 'src/interfaces';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  films: FilmInterface [];
  num: number = 2;

  constructor(private filmService: FilmService) {}

  updateNum(newNumber: number): void {
    this.num = newNumber
  };

  ngOnInit() {
    this.filmService.getFilms()
    .subscribe((films: FilmInterface[]) => this.films = films);
  }

}
