import { Component, OnInit } from '@angular/core';
import  { ActivatedRoute, Params} from '@angular/router';
import { MovieService } from './movie.service';
@Component({

	selector: 'movie-details',
	templateUrl: './movie.component.html',
	styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit{

	movie=[];
	constructor(private movieservice:MovieService,private route:ActivatedRoute)
	{

	}
	ngOnInit(): void
	{
    this.route.params.switchMap((params: Params) => this.movieservice.getMovie(params['movie'])).subscribe(movie=>this.movie=movie);
    }
	

}