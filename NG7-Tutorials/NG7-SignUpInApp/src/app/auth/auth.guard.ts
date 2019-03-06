import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userservice: UserService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('userToken') != null) {
      // tslint:disable-next-line:prefer-const
      let roles = next.data['roles'] as Array<string>;
      if (roles) {
        const match: any = this.userservice.roleMatch(roles);
        if (match) { return true; } else {
          this.router.navigate(['/forbidden']);
          return false;
        }
      } else {
        return true;
      }
    }
    this.router.navigate(['/login']);
    return false;
  }
}
