import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.auth.isAuthenticated()) this.router.navigate(['/']);
  }
  
  authenticate() {
    this.auth.authenticate();
    this.router.navigate(['/']);
  }

}
