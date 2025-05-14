import { Component, Input } from '@angular/core';

import { IUser } from '../../app-services/user.model';

@Component({
  selector: 'app-feed',
  standalone: false,
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {
  @Input() feed!: IUser;
}
