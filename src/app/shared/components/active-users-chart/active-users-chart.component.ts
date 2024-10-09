import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-active-users-chart',
  templateUrl: './active-users-chart.component.html',
  styleUrls: ['./active-users-chart.component.scss']
})
export class ActiveUsersChartComponent {

  @Input() public activeUsersData?: ChartConfiguration<'bar'>['data'];

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          display: true
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          display: true
        }
      }
    }
  }

  public barChartLegend = false;
}
