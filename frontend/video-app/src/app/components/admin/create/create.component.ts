import { Component, OnInit } from '@angular/core';
// For forms
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Import Service
import { MoviesService } from 'src/app/services/movies.service';
// Router
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  movies: any;
  createForm: FormGroup;

  constructor(private service: MoviesService, private router: Router, private fb: FormBuilder) {
      this.createForm = this.fb.group({
        title: ['', Validators.required],
        runningTime: ['', Validators.required],
        genre: ['', Validators.required],
        rating: ['', Validators.required],
        director: ['', Validators.required],
        status: ['', Validators.required]
    });
  }

  addMovie(title, runningTime, genre, rating, director, status) {
    this.service.addMovie(title, runningTime, genre, rating, director, status).subscribe(() => {
      this.router.navigate(['/movies']);
    }); 
  }

  ngOnInit() {
      
  }

}
