import { Component, OnInit } from '@angular/core';

import { FeedService } from './feed.service';
import { IFeedsResponse } from './feeds.model';
import { IUser } from '../app-services/user.model';

@Component({
  selector: 'app-feeds',
  standalone: false,
  templateUrl: './feeds.component.html',
  styleUrl: './feeds.component.scss',
})
export class FeedsComponent implements OnInit {
  feeds: IUser[] = [];
  page: number = 1;
  limit: number = 3;

  constructor(private feedService: FeedService) {}

  ngOnInit(): void {
    this.feedService.fetchFeeds(this.page, this.limit).subscribe({
      next: (response: IFeedsResponse) => {
        this.feeds = response.data;
      },
    });
  }
}
