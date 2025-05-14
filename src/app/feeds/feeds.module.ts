import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedService } from './feed.service';
import { FeedsRoutingModule } from './feeds.routing.module';
import { FeedsComponent } from './feeds.component';
import { FeedComponent } from './feed/feed.component';

@NgModule({
  declarations: [FeedsComponent, FeedComponent],
  imports: [CommonModule, FeedsRoutingModule],
  providers: [FeedService],
})
export class FeedsModule {}
