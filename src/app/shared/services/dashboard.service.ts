import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Http } from './http.service';
import { DashboardData } from '../interfaces/dashboard';
import { ActiveUsers } from '../interfaces/active-users';
import { UserRegistration } from '../interfaces/users-info';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: Http) {}

  public getUsersInfoData(): UserRegistration[] {
    return [
      {
        date: '2024-09-15T20:23:22Z',
        value: 10,
      },
      {
        date: '2024-09-15T22:23:22Z',
        value: 30,
      },
      {
        date: '2024-09-15T20:23:22Z',
        value: 20,
      },
    ];
  }

  public getDashboardData(): Observable<DashboardData> {
    // return this.http.getExternal(
    //   'https://run.mocky.io/v3/ef0f7b52-1dbf-4d30-ab14-03286370c3a3'
    // );

    const dashboard: DashboardData = {
      dashboard: {
        cards: [
          {
            title: 'Comissão de Afiliados',
            value: 5230.25,
            iconUrl: '',
            rangedDate: [
              new Date('2024-09-16T22:10:10Z'),
              new Date('2024-09-16T10:10:10Z'),
            ],
            cardsInfo: [
              {
                text: 'CPA.',
                value: 2598.5,
              },
              {
                text: 'NGR.',
                value: 2715.52,
              },
              {
                text: 'GGR.',
                value: 4200.05,
              },
            ],
          },
          {
            title: 'Depósitos',
            value: 165515230.25,
            iconUrl: '',
            rangedDate: [
              new Date('2024-09-16T22:10:10Z'),
              new Date('2024-09-16T10:10:10Z'),
            ],
            cardsInfo: [
              {
                text: 'VOLUME.',
                value: 155523252.25,
              },
              {
                text: 'QTD.',
                value: 585654.23,
              },
              {
                text: 'TICKET M.',
                value: 15,
              },
            ],
          },
          {
            title: 'GGR',
            value: 165515230.25,
            iconUrl: '',
            rangedDate: [
              new Date('2024-09-17T22:10:10Z'),
              new Date('2024-09-17T10:10:10Z'),
            ],
            cardsInfo: [],
          },
        ],
      },
    };
    return of(dashboard);
  }

  public getFilteredDashboardData(
    startDate: Date,
    endDate: Date
  ): Observable<DashboardData> {
    return this.getDashboardData().pipe(
      map((dashboardData: DashboardData) => {
        // Filtrando os cards com base no rangedDate
        const filteredCards = dashboardData.dashboard.cards.filter((card) => {
          const [startRange, endRange] = card.rangedDate;

          // Filtrando os cards cujas datas de intervalo estejam dentro do range fornecido
          return startRange >= startDate && endRange <= endDate;
        });

        // Criando um novo objeto DashboardData com os cards filtrados
        const filteredDashboardData: DashboardData = {
          dashboard: {
            cards: filteredCards,
          },
        };

        return filteredDashboardData;
      })
    );
  }

  public getUsersInfo(): Observable<UserRegistration[]> {
    // return this.http.getExternal(
    //   'https://run.mocky.io/v3/21c1a99b-b2f6-45d5-8601-e32f35ffe707'
    // );
    return of(this.getUsersInfoData());
  }

  public getActiveUsers(): Observable<ActiveUsers[]> {
    // return this.http.getExternal(
    //   'https://run.mocky.io/v3/21c1a99b-b2f6-45d5-8601-e32f35ffe707'
    // );

    const activeUsers: ActiveUsers[] = this.transformToActiveUsers(
      this.getUsersInfoData()
    );
    return of(activeUsers);
  }

  public getFilteredUsersInfo(
    startDate: Date,
    endDate: Date
  ): Observable<UserRegistration[]> {
    // return this.http.getExternal(
    //   `https://run.mocky.io/v3/21c1a99b-b2f6-45d5-8601-e32f35ffe707?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`
    // );
    const filteredUsers: UserRegistration[] = this.filterDataByDate(
      this.getUsersInfoData(),
      startDate,
      endDate
    );
    return of(filteredUsers);
  }

  public getFilteredActiveUsers(
    startDate: Date,
    endDate: Date
  ): Observable<ActiveUsers[]> {
    // return this.http.getExternal(
    //   `https://run.mocky.io/v3/21c1a99b-b2f6-45d5-8601-e32f35ffe707?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`
    // );
    const filteredUsers: UserRegistration[] = this.filterDataByDate(
      this.getUsersInfoData(),
      startDate,
      endDate
    );
    const activeUsers: ActiveUsers[] =
      this.transformToActiveUsers(filteredUsers);
    return of(activeUsers);
  }

  private filterDataByDate(
    data: UserRegistration[],
    startDate: Date,
    endDate: Date
  ): UserRegistration[] {
    return data.filter((user) => {
      const userDate = new Date(user.date);
      return userDate >= startDate && userDate <= endDate;
    });
  }

  private transformToActiveUsers(data: UserRegistration[]): ActiveUsers[] {
    return data.map((user) => ({
      date: user.date,
      value: user.value,
      active: user.value > 0,
    }));
  }
}
