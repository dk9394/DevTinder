import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from './../../../shared/services/user.service';
import { IUser } from '../../../shared/models/user.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  currentUser: IUser | null = null;
  isLoggedIn = false;

  constructor(
    private userService: UserService,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
      this.isLoggedIn = !!user;
    });
  }

  onLogout(): void {
    this.apiService.auth.post('/logout', {}).subscribe(() => {
      this.userService.clearCurrentUser();
      this.isLoggedIn = false;
      this.apiService.clearToken();
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
