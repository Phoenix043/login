import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup-up-page',
  templateUrl: './signup-up-page.component.html',
  styleUrls: ['./signup-up-page.component.css']
})
export class SignupUpPageComponent implements OnInit {

  public signUpForm!: FormGroup; // Removed the "!" symbol here

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: [''], // Provide initial value if needed
      password: [''] // Provide initial value if needed
    });
  }
  signUp() {
  this.http.post<any>('https://json-roz2.onrender.com/signupUsersList', this.signUpForm.value)
  .subscribe({
    next: (res) => { 
      alert('SIGNUP SUCCESSFUL');
      this.signUpForm.reset();
      this.router.navigate(['login']);
    },
    error: (err) => { 
      alert('Something went wrong')
    }
  });
  }
}
