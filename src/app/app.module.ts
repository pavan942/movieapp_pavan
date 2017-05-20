import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import  { MovieAppMaterialModule } from './movie-app-material.module';
import { SearchBarComponent } from './search/search-bar.component';
import { MovieService } from './movie/movie.service';
import { MovieComponent } from './movie/movie.component';
import  { RouterModule,Router,Routes } from '@angular/router';


const router:Routes = [{path: 'movielist/:movie',component: MovieComponent}]
@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovieAppMaterialModule,
    [RouterModule.forRoot(router)]
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
