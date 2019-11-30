import { Component, OnInit, Input } from '@angular/core';
import { FilmsComponent } from '../films/films.component';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

  // @Input() filmArr:number;
  filmArr = [{
    id: 1,
    render: true,
    score: 9.2,
    title: "The Shawshank Redemption",
    year: 1994,
  }]

  constructor() { }

  ngOnInit() {
    console.log(this.filmArr);
    
  }

}
