import { Component, OnInit, Input } from '@angular/core';
import { FilmsComponent } from '../films/films.component';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

  @Input() filmArr:any;
  
  constructor() { }

  ngOnInit() {
    
  }

}
