import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Router
import { RouterModule, Routes } from '@angular/router';

// For MatToolBar for formatting
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule,
  MatSelectModule, MatIconModule, MatButtonModule,
  MatCardModule, MatTableModule, MatDividerModule,
  MatSnackBarModule } from '@angular/material';

// For Forms
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/admin/list/list.component'; //  for customer list
import { CreateComponent } from './components/admin/create/create.component';
import { EditComponent } from './components/admin/edit/edit.component';
import { HomeComponent } from './components/movie/home/home.component';
import { ReserveComponent } from './components/movie/reserve/reserve.component';
import { MovieComponent } from './components/movie/movie/movie.component';

// Import Services
import { CustomersService } from './services/customers.service';
import { MoviesService } from './services/movies.service';

// Http (to connect back and front end)
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/admin/login/login.component';
import { AdminGuard } from './services/admin.guard';

// Routes
const routes: Routes = [
  {path: '',  component: HomeComponent},
  {path: 'home',  component: HomeComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'customers', component: ListComponent},
  {path: 'movies', component: MovieComponent},
  {path: 'reserve/:id', component: ReserveComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    HomeComponent,
    ReserveComponent,
    MovieComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
  ],
  providers: [MoviesService, CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
