import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      fullname: ['', Validators.required],
    });
  }
  async signup() {
    const val = this.form.value;

    if (val.email && val.password && val.fullname) {
      try {
        await this.authService.signup(val.email, val.password, val.fullname);
        this.router.navigateByUrl('/sign-in-page');
      } catch (err) {
        console.log(err);
      }
    }
  }
}
