import { Component, OnInit } from '@angular/core';
import { DashboardData } from '../shared/interfaces/dashboard';
import { DashboardService } from '../shared/services/dashboard.service';
import { Card } from '../shared/interfaces/card-dashboard';
import { ChartConfiguration } from 'chart.js';
import { UserRegistration } from '../shared/interfaces/users-info';
import { ActiveUsers } from '../shared/interfaces/active-users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public NewUsersData: ChartConfiguration<'line'>['data'];
  public activeUsersData: ChartConfiguration<'bar'>['data'];
  public dashboardData: DashboardData;
  public filteredCards: Card[];

  constructor(private dashboardService: DashboardService) {
    this.dashboardData = {} as DashboardData;
    this.filteredCards = [];

    this.NewUsersData = {} as ChartConfiguration<'line'>['data'];
    this.activeUsersData = {} as ChartConfiguration<'bar'>['data'];
  }

  ngOnInit(): void {
    this.loadDashboardData();

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);

    this.fetchNewUsersData(startDate, new Date());
    this.fetchActiveUsersData(startDate, new Date());
  }

  private loadDashboardData(): void {
    this.dashboardService.getDashboardData().subscribe({
      next: (data) => {
        this.dashboardData = data;
        this.filteredCards = data.dashboard.cards;
      },
      error: (error) => {
        console.error('Erro ao encontrar dados da Dashboard:', error);
      },
    });
  }

  public handleDateRangeSelected(dateRange: {
    startDate: Date;
    endDate: Date;
  }): void {
    const startDate = dateRange.startDate;
    const endDate = dateRange.endDate;

    this.fetchNewUsersData(startDate, endDate);
    this.fetchActiveUsersData(startDate, endDate);

    this.dashboardService
      .getFilteredDashboardData(startDate, endDate)
      .subscribe({
        next: (data) => {
          this.dashboardData = data;
          this.filteredCards = data.dashboard.cards;
        },
        error: (error) => {
          console.error('Erro ao encontrar dados da Dashboard:', error);
        },
      });
  }

  private fetchNewUsersData(startDate: Date, endDate: Date): void {
    this.dashboardService.getFilteredUsersInfo(startDate, endDate).subscribe(
      (data: UserRegistration[]) => {
        const filteredData = data.filter((user) => {
          const userDate = new Date(user.date);
          return userDate >= startDate && userDate <= endDate;
        });

        const labels = filteredData.map((user) => {
          return new Date(user.date).toLocaleDateString('pt-BR', {
            month: '2-digit',
            day: '2-digit',
          });
        });
        const userData = filteredData.map((user) => user.value);

        this.NewUsersData = {
          labels: labels,
          datasets: [
            {
              label: '',
              fill: true,
              tension: 0.3,
              borderColor: 'rgb(143,166,183)',
              backgroundColor: 'transparent',
              pointBackgroundColor: '#A8C5DA',
              pointBorderColor: 'transparent',
              data: userData,
            },
          ],
        };
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  private fetchActiveUsersData(startDate: Date, endDate: Date): void {
    this.dashboardService.getFilteredActiveUsers(startDate, endDate).subscribe(
      (data: ActiveUsers[]) => {
        const filteredData = data.filter((user) => {
          const userDate = new Date(user.date);
          return userDate >= startDate && userDate <= endDate;
        });

        const labels = filteredData.map((user) => {
          // Formatação de data usando pipe `date`
          return new Date(user.date).toLocaleDateString('pt-BR', {
            month: '2-digit',
            day: '2-digit',
          });
        });
        const userData = filteredData.map((user) => user.value);

        this.activeUsersData = {
          labels: labels,
          datasets: [
            {
              label: '',
              backgroundColor: 'white',
              borderWidth: 0,
              barThickness: 25,
              data: userData,
            },
          ],
        };
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
