import { Component } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { HttpMoviesServiceService } from '../http-movies-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  movies: any;
  searchTermEntered: string = '';
  foundMovies: any;

  constructor(private _http: HttpMoviesServiceService) { }
  ngOnInit(): void {
    this._http.GetAllBatManMovies().subscribe((res: any) => {
      this.movies = res.Search;
    
    });
  }
  onMovieSearch(searchTerm: string) {
    this._http.SerchByTitle(searchTerm).subscribe((data: any) => {
      this.foundMovies = data.Search;
      console.log(this.foundMovies);
    });
  }

  onSearchEntered(event: any) {
    this.searchTermEntered = event.target.value;
    this.onMovieSearch(this.searchTermEntered);
  }

}
