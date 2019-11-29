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

  constructor(private filmService: FilmService) { }


  clickHandler (e) {
    this.films.forEach((elem) => {
      elem.render = false;
    });

    this.films[e].render = true;
  };

  ngOnInit() {
    this.filmService.getFilms().subscribe((films: FilmInterface[]) => this.films = films);
  }

}
