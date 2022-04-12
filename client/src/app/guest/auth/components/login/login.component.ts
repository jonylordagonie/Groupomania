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

  constructor(private auth: AuthService,
              private router: Router,
              private formBuilder: FormBuilder,
              private userService: UsersService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    }, {
      updateOn: 'submit'
    });
  }

  onLogin(): void{
    console.log(this.loginForm.value)
    this.auth.login();
    this.router.navigateByUrl('/index')
  }

}
