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

  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private userService: UsersService,) { }

  ngOnInit(): void {
    const userId = +this.route.snapshot.params['id'];
    this.user$ = this.userService.getUserById(userId);


    this.modifyProfilForm = this.formBuilder.group({
      nom: [null, ],
      prenom: [null, ],
      email: [null, ],
    }, {
      updateOn: 'change'
    });
  }

  onSubmit(): void{
    const userinfo = this.authService.getUser()
    const values = this.modifyProfilForm.value
    if (values.nom == null || values.nom == '') {
      values.nom = userinfo.nom
    }
    if (values.prenom == null || values.penomnom == '') {
      values.prenom = userinfo.prenom
    }
    if (values.email == null || values.email == '') {
      values.email = userinfo.email
    }
    const userId = +this.route.snapshot.params['id']
    this.userService.modifyUser(values, userId)
  }

  onDelete(): void{
    const userId = +this.route.snapshot.params['id']
    this.userService.deleteUser(userId)
  }

}
