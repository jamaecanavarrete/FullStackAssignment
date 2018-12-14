import { Component, OnInit } from '@angular/core';
// For forms
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Import Service
import { MoviesService } from 'src/app/services/movies.service';
// Router
import { Router, ActivatedRoute } from '@angular/router';
// Design
import { MatSnackBar } from '@angular/material';
// Interface
import { Movie } from '../../../services/movie.model';


@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

 id: String;
 movie: any = {};
 updateForm: FormGroup;

 constructor(private service: MoviesService,
   private router: Router,
   private route: ActivatedRoute,
   private snackBar: MatSnackBar,
   private fb: FormBuilder) {
   this.createForm();
   }

 createForm() {
   this.updateForm = this.fb.group({
     title: '',
     runningTime: '',
     genre: '',
     rating: '',
     director: '',
     customer: ['', Validators.required]
   });
 }

 ngOnInit() {
   this.route.params.subscribe(params => {
     this.id = params.id;
     this.service.getMovieById(this.id).subscribe(res => {
       this.movie = res;
       this.updateForm.get('title').setValue(this.movie.title);
       this.updateForm.get('runningTime').setValue(this.movie.runningTime);
       this.updateForm.get('genre').setValue(this.movie.genre);
       this.updateForm.get('rating').setValue(this.movie.rating);
       this.updateForm.get('director').setValue(this.movie.director);
     });
   });
 }

 updateMovie(title, runningTime, genre, rating, director, status="Unavailable") {
  this.route.params.subscribe(params => {
    this.service.updateMovie(params['id'], title, runningTime, genre, rating, director, status).subscribe(() => {
       this.router.navigate(['/home']);
    });
  });
}


}