import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  // get movie
  getMovies() {
    return this.http.get(`${this.uri}/movies`);
  }

  // get movie by id
  getMovieById(id) {
    return this.http.get(`${this.uri}/movies/${id}`);
  }

  // add movie
  addMovie(title, runningTime, genre, rating, director, status) {
    const movie = {
      title: title,
      runningTime: runningTime,
      genre: genre,
      rating: rating,
      director: director,
      status: status,
    };
    return this.http.post(`${this.uri}/movies/add`, movie);
    // .subscribe(res => console.log('The movie is added'));
  }

  // update movie
  // add movie
  updateMovie(id, title, runningTime, genre, rating, director, status) {
    const movie = {
      id: id,
      title: title,
      runningTime: runningTime,
      genre: genre,
      rating: rating,
      director: director,
      status: status
    };
    return this.http.post(`${this.uri}/movies/update/${id}`, movie)
    // .subscribe(res => console.log('The movie is updated'));
  }

  // delete movie
  deleteMovie(id) {
    return this.http.get(`${this.uri}/movies/delete/${id}`);
  }
}
