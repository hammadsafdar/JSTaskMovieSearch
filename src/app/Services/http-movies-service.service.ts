import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpMoviesServiceService {

  constructor(private http: HttpClient) { }

  GetAllBatManMovies(){
    return this.http.get('http://www.omdbapi.com/?s=Batman&apikey=b9f99a9a');
  }

  SerchByTitle(searchTerm: string){
    return this.http.get(`https://www.omdbapi.com/?s=${searchTerm}&page=1&type=movie&apikey=b9f99a9a`);
  }

}
