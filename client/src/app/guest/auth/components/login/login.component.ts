import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UsersService } from 'src/app/core/services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  userId$!: Number;
  error!: string;
  errormsg!: string;

  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder,
              ) { }

  ngOnInit(): void {
    this.errormsg = ''
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    }, {
      updateOn: 'change'
    });
  }

  get f() { return this.loginForm.controls; }

  onLogin(): void{
    this.authService.login(this.loginForm.value).subscribe(res => {
      this.authService.setToken(res)
      this.authService.setUser(res)
      this.userId$ = this.authService.getUser().id
      this.router.navigateByUrl(`/profil/${this.userId$}`)
        .then(
        ()=>location.reload()
      )
    },
      error => {
        this.error = error.error.msg
        if (this.error.length > 0) {
          if (this.error.includes('Email')) {
            this.errormsg = 'email'
          } else {
            this.errormsg = 'password'
          }
        }
      }
    )
  }

}