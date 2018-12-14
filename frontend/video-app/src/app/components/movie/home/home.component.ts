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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];
  displayedColumns: string[] = ['title', 'runningTime', 'genre', 'rating', 'director', 'status', 'reserve'];
  dataSource: any;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private movieService: MoviesService, private http: HttpClient,
    private router: Router) {}

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

  findMovie(id) {
    this.router.navigate([`/reserve/${id}`]);
  }

  ngOnInit() {
    this.getMovies();
  }
  login(){
    this.router.navigate([`/login`]);
  }

}