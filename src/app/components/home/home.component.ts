import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}
  logout(): void {
    // Clear authentication state or perform any necessary actions
    // For this example, we'll just navigate to the login page
    this.router.navigate(['/login']);
}
home(): void {
  // Clear authentication state or perform any necessary actions
  // For this example, we'll just navigate to the login page
  this.router.navigate(['home']);
}
profile(): void {
  // Clear authentication state or perform any necessary actions
  // For this example, we'll just navigate to the login page
  this.router.navigate(['home']);
}
}
