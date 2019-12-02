import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  filmForm = new FormGroup({
    title: new FormControl(''),
    year: new FormControl(''),
    score: new FormControl(''),
    visible: new FormControl(''),
    submit: new FormControl(''),
  });
  
  constructor() { 
    
    
  }

  onSubmit () {
    console.log(this.filmForm.value);
  }

  

  ngOnInit() {
  }

}
