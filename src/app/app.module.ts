import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmListComponent } from './film-list/film-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmDetailComponent,
    FilmListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
