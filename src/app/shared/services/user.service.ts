import { Injectable } from '@angular/core';

import { IUser } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private $currentUser = new BehaviorSubject<IUser | null>(null);

  setCurrentUser(user: IUser): void {
    this.$currentUser.next(user);
  }

  getCurrentUser(): Observable<IUser | null> {
    return this.$currentUser.asObservable();
  }

  clearCurrentUser(): void {
    this.$currentUser.next(null);
  }

  isLoggedIn() {
    return this.$currentUser.getValue() !== null;
  }
}
