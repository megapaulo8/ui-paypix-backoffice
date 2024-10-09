import { Component, OnInit, Input } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-new-users-chart',
  templateUrl: './new-users-chart.component.html',
  styleUrls: ['./new-users-chart.component.scss'],
})
export class NewUsersChartComponent implements OnInit {
  
  @Input() public NewUsersData?: ChartConfiguration<'line'>['data'];

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    elements: {
      line: {
        borderWidth: 1,
      }
    },
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
  };
  public lineChartLegend = false;

  constructor() {}

  ngOnInit(): void {}
}
