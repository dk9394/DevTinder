import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BaseModule } from './base/base.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BaseModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'DevTinder';
}
