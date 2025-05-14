import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../app-services/api.service';
import { UserService } from '../app-services/user.service';
import { IFeedsResponse } from './feeds.model';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(
    private apiService: ApiService,
    private userService: UserService
  ) {}

  fetchFeeds(page: number, limit: number): Observable<IFeedsResponse> {
    return this.apiService.feeds.get(`/?page=${page}&limit=${limit}`);
  }
}
