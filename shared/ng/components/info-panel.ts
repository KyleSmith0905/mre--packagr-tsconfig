import { Component } from '@angular/core';
import { DAYS_IN_WEEK } from '../../constants/date';

@Component({
  standalone: true,
  selector: 'info-panel',
  template: `<p>Days In Week:</p>`,
})
export class InfoPanelComponent {
  DAYS_IN_WEEK = DAYS_IN_WEEK;
}
