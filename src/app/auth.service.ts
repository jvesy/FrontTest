import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated: boolean;

  constructor() {
    this.authenticated = false;
  }

  authenticate() {
    this.authenticated = true;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if(this.auth.isAuthenticated()) return true;

    this.router.navigate(['/login']);
    return false;
  }
}