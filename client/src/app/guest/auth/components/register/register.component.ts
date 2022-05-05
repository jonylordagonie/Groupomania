import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
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
  error!: string;
  errormsg!: string;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.errormsg = ''
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    }, {
      updateOn: 'change'
    });
  }

  get f() { return this.registerForm.controls; }

  onregister(): void{
    this.authService.register(this.registerForm.value).pipe(
      tap(() => {
        this.router.navigateByUrl('/index');
      })
    ).subscribe(
      (res) => { console.log(res) },
      error => {
        console.log(error.error)
        this.error = error.error.msg
        if (this.error.length > 0) {
          if (this.error.toLocaleLowerCase().includes('email')) {
            this.errormsg = 'email'
            console.log(this.error)
          } else {
            if (this.error.toLocaleLowerCase().includes('passe')) {
              this.errormsg = 'password'
            } else {
              if (this.error.toLocaleLowerCase().includes('un nom')) {
                this.errormsg = 'nom'
              } else {
                if (this.error.toLocaleLowerCase().includes('un prenom')) {
                  this.errormsg = 'prenom'
                }
              }
            }
          }
        }
      }
    );
  }

}



