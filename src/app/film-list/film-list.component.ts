import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  @Input() filmArr: any[];
  @Output() filmSelected = new EventEmitter<object>();

  constructor() { }

    clickHandler (e) {
      this.filmArr.forEach((elem) => {
      elem.render = false;
    });

    this.filmArr[e].render = true;
    console.log(this.filmArr[e])
    this.filmSelected.emit(this.filmArr[e]);
  };

  ngOnInit() {
  }

}
