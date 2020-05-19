import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs';
import { map} from  'rxjs/operators'

const INVALID_USERNAME_OR_PASSWORD = 'Nom ou mot de passe invalide'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  formSubmitAttempt: boolean;
  loading: boolean = false
  errorMessage;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.formSubmitAttempt = false;
    this.loading = true;
    this.errorMessage = "";
    if (this.form.valid) {
      	this.authService.login(this.form.value).subscribe((respnnse) => {
      	this.router.navigateByUrl('home');
    	},
      (error) => {  
          if (error.status = 401) {
            this.errorMessage = INVALID_USERNAME_OR_PASSWORD;
          }                         
          this.loading = false;
          throw error;
        });
    } else {
      this.formSubmitAttempt = true;
    }
  }

}