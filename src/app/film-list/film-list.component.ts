import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  @Input() filmArr: any[];
  @Output() getArrChanged = new EventEmitter<boolean>();

  constructor() { }

    clickHandler (e) {
      this.filmArr.forEach((elem) => {
      elem.render = false;
    });

    this.filmArr[e].render = true;
    this.getArrChanged = [...this.filmArr];
    console.log(this.filmArr);
  };

  ngOnInit() {
    console.log(this.filmArr);
  }

}
