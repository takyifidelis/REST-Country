import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Import the components associated with the routes
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';

// Define the routes for the application
const routes: Routes = [
  // Route for the home page (empty path)
  {
    path: '',
    component: HomeComponent, // Associate the HomeComponent with this route
  },
  // Dynamic route for displaying country details based on the country code in the URL
  {
    path: ':country',
    component: DetailComponent, // Associate the DetailComponent with this route
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
