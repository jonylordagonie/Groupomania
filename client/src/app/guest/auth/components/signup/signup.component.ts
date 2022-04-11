import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UsersService } from 'src/app/core/services/users.service';
import { tap } from 'rxjs';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  emailRegex!: RegExp;

  constructor(private auth: AuthService,
              private router: Router,
              private formBuilder: FormBuilder,
              private userService: UsersService) { }

  ngOnInit(): void {
    this.emailRegex = /^[a-zA-Z0-9.-_]+@{1}[a-zA-Z-0-9.-]+.{1}[a-zA-Z-0-9]{2,6}$/;
    this.signupForm = this.formBuilder.group({
      nom: [null, Validators.required],
      prenom: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(this.emailRegex)]],
      password: [null, Validators.required]
    }, {
      updateOn: 'blur'
    });
  }

  onSignup(): void{
    this.userService.addUser(this.signupForm.value).pipe(
      tap(() => {
        this.auth.login(),
        this.router.navigateByUrl('/index');
      })
    ).subscribe();
  }

}
