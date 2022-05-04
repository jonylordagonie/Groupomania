import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Observable, tap } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  user$!: Observable<User>;
  userId$!: Number;
  error!: string;

  constructor(private userService: UsersService,
    private route: ActivatedRoute,
   private authService: AuthService) { }

  ngOnInit(): void {
    const userId = +this.route.snapshot.params['id'];
    this.userId$ = this.authService.getUser().id
    this.userService.getUserById(userId).subscribe(
      () => console.log('req send'),
      error => {
        console.log('error:', error.error)
        this.error = error.error
        console.log('this.error:', this.error)
      }
    )
    this.user$ = this.userService.getUserById(userId)
  }

}
