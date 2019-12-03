import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  filmForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required, Validators.minLength(4)]),
    score: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    visible: new FormControl('', [Validators.required, Validators.requiredTrue]),
    submit: new FormControl(''),
  });
  
  constructor(private filmService: FilmService) {}

  onSubmit () {
    console.log(this.filmForm.value);
    window.sessionStorage[this.filmForm.value.title] = this.filmForm.value;
  };

  ngOnInit() {
    this.filmService.renderSomethig();
  };
}
