import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-instamania',
  templateUrl: './instamania.component.html',
  styleUrls: ['./instamania.component.scss']
})
export class InstamaniaComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.isUser().subscribe(
      ok => console.log(ok),
      () => {
        this.router.navigateByUrl('auth/login')
      }
    )
  }

}
