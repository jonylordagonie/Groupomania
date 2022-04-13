import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UsersService } from 'src/app/core/services/users.service';
import { tap } from 'rxjs';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
  
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  emailRegex!: RegExp;
  nameRegex!: RegExp;
  passwordRegex!: RegExp;

  constructor(private auth: AuthService,
              private router: Router,
              private formBuilder: FormBuilder,
              private userService: UsersService) { }

  ngOnInit(): void {
    this.emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    this.passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_.])[A-Za-z\d$@$!%*?&_.]{8,40}$/;
    this.nameRegex = /^[a-zA-ZÀ-ÿ -]{2,40}$/;
    this.registerForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.pattern(this.nameRegex)]],
      prenom: ['', [Validators.required, Validators.pattern(this.nameRegex)]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      password: ['', [Validators.required, Validators.pattern(this.passwordRegex)]]
    }, {
      updateOn: 'change'
    });
  }

  get f() { return this.registerForm.controls; }

  onregister(): void{
    this.userService.register(this.registerForm.value).pipe(
      tap(() => {
        this.auth.login(),
        this.router.navigateByUrl('/index');
      })
    ).subscribe();
  }

}
