import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  user$!: Observable<User>;
  user: any;

  constructor(private userService: UsersService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userId = +this.route.snapshot.params['id'];
    this.userService.getUserById(userId).subscribe(res => {
      console.log(res)
      this.user = res;
    });
  }

}
