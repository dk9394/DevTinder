import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { UserService } from '../app-services/user.service';
import { map, tap } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    const user$ = this.userService.getCurrentUser();
    return user$.pipe(
      map((user) => !!user),
      tap((authenticatedUser) => {
        if (!authenticatedUser) {
          this.router.navigateByUrl('/');
        }
      })
    );
  }
}
