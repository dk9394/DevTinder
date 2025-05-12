import { Component } from '@angular/core';

import { FeedComponent } from './feed/feed.component';

@Component({
  selector: 'app-feeds',
  standalone: true,
  imports: [FeedComponent],
  templateUrl: './feeds.component.html',
  styleUrl: './feeds.component.scss',
})
export class FeedsComponent {}
