import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PanelComponent } from './components/panel/panel.component';

@NgModule({
  declarations: [PanelComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [PanelComponent],
})
export class SharedModule {}
