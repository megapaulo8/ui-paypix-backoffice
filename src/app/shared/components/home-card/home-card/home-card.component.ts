import { Component, Input } from '@angular/core';
import { DashboardData } from 'src/app/shared/interfaces/dashboard';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent {
  
  @Input() public dashboardData: DashboardData;

  constructor() {
    this.dashboardData = {} as DashboardData;
  }

}
