/**
 * Title: sign-in.component.ts
 * Author: Tiffany Reyes
 * Date: 19 Sept 2023
 * Description: sign-in component
 */

// exporting book class elements
import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  // declaring variables
  signInForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signInService: SignInService) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({studentId: ''});
  }
  // submit function for sign-in
  onSubmit() {
    const formValues = this.signInForm.value;

    const studentId = parseInt(formValues.studentId);
    if (this.signInService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/']);
    }
    else {
      this.errorMessage = 'Invalid sign-in.'
    }
  }
}
