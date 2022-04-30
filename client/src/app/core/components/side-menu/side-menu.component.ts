import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  userId$ = Number;
  isLog = false
  
  constructor(private router: Router,
    private authService: AuthService) { }
 

  ngOnInit(): void {
    this.userId$ = this.authService.getUser().id
    if (this.authService.getUser().id != null) {
      this.isLog = true
    }
  }

}
