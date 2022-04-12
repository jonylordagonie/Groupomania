import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';
import { User } from 'src/app/models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-modify-profil',
  templateUrl: './modify-profil.component.html',
  styleUrls: ['./modify-profil.component.scss']
})
export class ModifyProfilComponent implements OnInit {
  modifyProfilForm!: FormGroup;
  emailRegex!: RegExp;
  user$!: Observable<User>;

  constructor(private auth: AuthService,
              private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private userService: UsersService) { }

  ngOnInit(): void {
    const userId = +this.route.snapshot.params['id'];
    this.user$ = this.userService.getUserById(userId);

    this.emailRegex = /^[a-zA-Z0-9.-_]+@{1}[a-zA-Z-0-9.-]+.{1}[a-zA-Z-0-9]{2,6}$/;
    this.modifyProfilForm = this.formBuilder.group({
      nom: [null, Validators.required],
      prenom: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(this.emailRegex)]],
      password: [null, Validators.required]
    }, {
      updateOn: 'blur'
    });
  }

  onSubmit(): void{
    this.userService.register(this.modifyProfilForm.value).pipe(
      tap(() => {
        this.router.navigateByUrl('/index'), 
        this.auth.login();
      })
    ).subscribe();
  }

}
