import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Profile } from '../../models/profile'

const PROFILE_LOADING_FAILURE = 'Chargement du profil impossible'
const PROFILE_UPDATE_SUCCESS = 'Mise à jour du profil effectuée'
const PROFILE_UPDATE_FAILURE = 'Mise à jour du profil impossible'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form: FormGroup
  formSubmitAttempt: boolean
  loading: boolean = false;
  profile: Profile
  errorMessage
  successMessage

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    let pangolin_id = localStorage.getItem("USERID")
    this.loading = true
    this.form = this.fb.group({
          name: ['', Validators.required],
          age: ['', Validators.required],
          family: ['', Validators.required],
          race: ['', Validators.required],
          food: ['', Validators.required],
          latitude: ['', Validators.required],
          longitude: ['', Validators.required]
    });
    this.authService.loadProfile(pangolin_id).subscribe((response) => {
        this.loading = false;
        this.form = this.fb.group({
          name: [response.name, Validators.required],
          age: [response.age, Validators.required],
          family: [response.family, Validators.required],
          race: [response.race, Validators.required],
          food: [response.food, Validators.required]
        });
      },
      (error) => {                
        this.loading = false;
        if (error.status == '401') {
          this.router.navigateByUrl('/login')
        }
        this.errorMessage = PROFILE_LOADING_FAILURE
        throw error;
      });
  }

  update() {
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      	this.authService.updateProfile(this.form.value).subscribe((response) => {
          this.loading = false;
          this.successMessage = PROFILE_UPDATE_SUCCESS
    	  },
        (error) => {                
            this.loading = false;
            this.errorMessage = PROFILE_UPDATE_FAILURE
            throw error;
        });

    } else {
      this.formSubmitAttempt = true;
    }
  }

  cancel() {
    this.router.navigateByUrl('home');
  }

}