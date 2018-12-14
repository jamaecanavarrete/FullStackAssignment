import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { HttpClient } from '@angular/common/http';

// For routing
import { Router } from '@angular/router';
// For formatting
import {MatTableDataSource} from '@angular/material';
// Interface
import { Movie } from '../../../services/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Movie[] = [];
  displayedColumns: string[] = ['title', 'runningTime', 'genre', 'rating', 'director', 'status', 'actions'];
  dataSource: any;

  constructor(private movieService: MoviesService, private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieService
    .getMovies()
    .subscribe((data: Movie[]) => {
      this.movies = data;
      this.dataSource = new MatTableDataSource(this.movies);
      console.log('Data requested ...');
      console.log(this.movies);
    });
  }

  editMovie(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteMovie(id) {
    this.movieService.deleteMovie(id).subscribe(() => {
      this.getMovies();
    });
  }

}
