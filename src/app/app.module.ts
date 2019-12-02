import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmListComponent } from './film-list/film-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { FootballApiComponent } from './football-api/football-api.component';
import { PetApiComponent } from './pet-api/pet-api.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { MediaVideoComponent } from './media-video/media-video.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'list', component: FilmsComponent },
  { path: 'list/:id', component: FilmsComponent },
  { path: 'add', component: AddFormComponent },
  { path: 'add/:id', component: AddFormComponent },
  { path: 'football', component: FootballApiComponent },
  { path: 'petfinder', component: PetApiComponent },
  { path: 'videomedia', component: MediaVideoComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmDetailComponent,
    FilmListComponent,
    AddFormComponent,
    FootballApiComponent,
    PetApiComponent,
    NotFoundPageComponent,
    MediaVideoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing:false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
