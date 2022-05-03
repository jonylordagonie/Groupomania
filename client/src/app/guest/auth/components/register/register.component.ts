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
  errormsg: any;
  erroremail: any;
  errorpassword: any;

  constructor(private auth: AuthService,
              private router: Router,
              private formBuilder: FormBuilder,
              private userService: UsersService,
              private authService: AuthService) { }

  ngOnInit(): void {
    // this.emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    // this.passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_.])[A-Za-z\d$@$!%*?&_.]{8,40}$/;
    // this.nameRegex = /^[a-zA-ZÀ-ÿ -]{2,40}$/;

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
      (error) => {
        this.errormsg = error.error
        if (this.errormsg.lenght = 0){
          
        } else {
          if (this.errormsg.msg.toString().includes('Email')) {
            this.erroremail = this.errormsg.msg.toString().includes('Email')
          }
          if (this.errormsg.msg.toString().includes('passe')) {
            this.errorpassword = this.errormsg.msg.toString().includes('passe')
          }
          console.log(this.errormsg)
        }
      }
    );
  }

}



