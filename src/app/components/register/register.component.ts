import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

const SERVER_ERROR = 'Serveur indisponible. Réessayez ultérieurement'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  registerInvalid: boolean;
  formSubmitAttempt: boolean;
  returnUrl: string;
  loading: boolean = false
  errorMessage;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      family: ['', Validators.required],
      race: ['', Validators.required],
      food: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    });
  }

  register() {
    this.registerInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
        this.loading = true;
      	this.authService.register(this.form.value).subscribe((res) => {
          this.loading = false;
      		this.router.navigateByUrl('home');
    	},
      (error) => { 
          this.errorMessage = SERVER_ERROR;                       
          this.loading = false;
          throw error;
        });
    } else {
      this.formSubmitAttempt = true;
    }
  }

}