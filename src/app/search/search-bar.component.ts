import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie/movie.service';
import { Router } from '@angular/router';

@Component({
 selector: 'search-bar',
 templateUrl: './search-bar.component.html',
 styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

   
 constructor(private movieservice:MovieService, private route: Router) { }
 onclick(movie:string)
 {
     console.log(movie);
     this.route.navigate(['movielist',movie]);

 }

 ngOnInit()
 {

 }

}