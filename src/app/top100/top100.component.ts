import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-top100',
  templateUrl: './top100.component.html',
  styleUrls: ['./top100.component.scss'],
})
export class Top100Component implements OnInit {
  public selectedCategory: string;
  public top100Data: any;
  private top100Subscription!: Subscription;
  public startDate: string;
  public endDate: string;
  public filteredTop100Data: any;

  constructor(private usersService: UsersService) {
    this.selectedCategory = 'apostas';
    this.getTop100Data(this.selectedCategory);
    this.top100Data = [];
    this.filteredTop100Data = [];

    this.startDate = '';
    this.endDate = '';
  }

  ngOnInit(): void {
    this.getTop100Data(this.selectedCategory);
  }

  public categoryNames: { [key: string]: string } = {
    apostas: 'Apostas',
    depositos: 'Depósitos',
    saques: 'Saques',
    'perdas-apostas': 'Perdas em apostas',
    'ganhos-apostas': 'Ganhos em apostas',
    indicadores: 'Indicadores',
  };

  public onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
    this.getTop100Data(this.selectedCategory);
  }

  public onStartDateSelected(event: any) {
    const selectedDate = event.target.value;
    this.startDate = selectedDate;
    this.applyFilter();
  }

  public onEndDateSelected(event: any) {
    const selectedDate = event.target.value;
    this.endDate = selectedDate ? selectedDate + 'T23:59:59' : ''; 
    this.applyFilter();
  }
  

  private applyFilter() {
    if (this.startDate && this.endDate) {
      console.log('Filtrar dados entre', this.startDate, 'e', this.endDate);
      this.filteredTop100Data = this.filterDataAndFetch();
    }
  }

  private getTop100Data(category: string) {
    switch (category) {
      case 'apostas':
        this.top100Subscription = this.usersService
          .getTopBets()
          .subscribe((data) => {
            this.filteredTop100Data = data.sort((a, b) => b.netWin - a.netWin);
            this.top100Data = data.sort((a, b) => b.netWin - a.netWin);
            this.applyFilter();
          });
        break;
      case 'depositos':
        this.top100Subscription = this.usersService
          .getTopDeposits()
          .subscribe((data) => {
            this.filteredTop100Data = data.sort(
              (a, b) => b.depositValue - a.depositValue
            );
            this.top100Data = data.sort(
              (a, b) => b.depositValue - a.depositValue
            );
            this.applyFilter();
          });
        break;
      case 'saques':
        this.top100Subscription = this.usersService
          .getTopWithdrawals()
          .subscribe((data) => {
            this.filteredTop100Data = data.sort(
              (a, b) => b.withdrawalValue - a.withdrawalValue
            );
            this.top100Data = data.sort(
              (a, b) => b.withdrawalValue - a.withdrawalValue
            );
            this.applyFilter();
          });
        break;
      case 'perdas-apostas':
        this.top100Subscription = this.usersService
          .getTopLosses()
          .subscribe((data) => {
            this.filteredTop100Data = data.sort(
              (a, b) => b.netLosses - a.netLosses
            );
            this.top100Data = data.sort((a, b) => b.netLosses - a.netLosses);
            this.applyFilter();
          });
        break;
      case 'ganhos-apostas':
        this.top100Subscription = this.usersService
          .getTopWins()
          .subscribe((data) => {
            this.filteredTop100Data = data.sort((a, b) => b.netWin - a.netWin);
            this.top100Data = data.sort((a, b) => b.netWin - a.netWin);
            this.applyFilter();
          });
        break;
      case 'indicadores':
        this.top100Subscription = this.usersService
          .getTopReferrals()
          .subscribe((data) => {
            this.filteredTop100Data = data.sort(
              (a, b) => b.referralEarnings - a.referralEarnings
            );
            this.top100Data = data.sort(
              (a, b) => b.referralEarnings - a.referralEarnings
            );
            this.applyFilter();
          });
        break;
    }
  }
  private filterDataAndFetch() {
    const filteredData = this.top100Data.filter((item: any) => {
      const itemDate = new Date(item.data_top);
      const startDate = this.startDate ? new Date(this.startDate) : null;
      const endDate = this.endDate ? new Date(this.endDate) : null;

      if (startDate && itemDate < startDate) {
        return false;
      }

      if (endDate && itemDate > endDate) {
        return false;
      }

      return true;
    });

    this.filteredTop100Data = filteredData;

    return filteredData;
  }
}
