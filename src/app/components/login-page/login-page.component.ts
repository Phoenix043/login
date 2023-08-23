import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from 'cypress/types/jquery';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required], // Added Validators.required
      password: ['', Validators.required]
    });
  }
  logout(): void {
    // Clear authentication state or perform any necessary actions
    // For this example, we'll just navigate to the login page
    this.router.navigate(['/login']);
  }

  login(): void {
    this.http.get<any>('https://json-roz2.onrender.com/signupUsersList').subscribe({
      next:(res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          alert('Login Successful');
          this.loginForm.reset();
          this.router.navigate(['home']);
        } else {
          alert('User not found');
        }
      },
      error:(error) => {
        alert('Something went wrong');
      }
  });
  }
}
