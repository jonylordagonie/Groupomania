import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {


  constructor(private router: Router,
              private authService: AuthService) { }


  ngOnInit(): void {
    
  }

  onViewProfil() {
    this.authService.getUser();
  }

}
