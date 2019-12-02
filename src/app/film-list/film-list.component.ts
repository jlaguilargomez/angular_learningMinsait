import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  idUrl: string;

  @Input() filmArr: any[];
  @Output() filmSelected = new EventEmitter<object>();
  
  constructor(private route: ActivatedRoute) { }

    clickHandler (e) {
      this.filmArr.forEach((elem) => {
      elem.render = false;
    });

    this.filmArr[e].render = true;
    this.filmSelected.emit(this.filmArr[e]);
  };
  

  ngOnInit() {}

}
