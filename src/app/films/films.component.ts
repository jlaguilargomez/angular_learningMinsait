import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { FilmInterface } from 'src/interfaces';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})

export class FilmsComponent implements OnInit {

  films: FilmInterface [];
  receivedFilm: object;
  filmUrl: object;
  
  constructor(private filmService: FilmService, private route: ActivatedRoute) {}

  getFilmSelected (film: object){
    this.receivedFilm = film;
  };

  ngOnInit() {
    this.filmService.getFilms()
    .subscribe((films: FilmInterface[]) => {
      this.films = films;

      this.route.paramMap
      .subscribe((params: ParamMap) => {
        let idUrl = Number(params.get('id'));
        this.filmUrl = this.films[idUrl-1];
        this.receivedFilm = this.filmUrl;
      });
    });   
  };
};
