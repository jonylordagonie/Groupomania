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
  passwordRegex!: RegExp;

  constructor(private auth: AuthService,
              private router: Router,
              private formBuilder: FormBuilder,
              private userService: UsersService) { }

  ngOnInit(): void {
    this.emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    this.passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_.])[A-Za-z\d$@$!%*?&_.]{8,40}$/
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
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
