import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// For forms
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  username: String;
  password: String;

  ngOnInit() {
  }

  login(): void {
    console.log('button clicked');
    if (this.username === 'admin' && this.password === 'admin') {
        this.router.navigate(['/movies']);
     } else {
       alert('Username or Password did not match.\n Redirecting to your dashboard :)');
       this.router.navigate(['/']);
     }
  }


}
