import { Component, Input } from '@angular/core';
import { WithdrawList } from '../../interfaces/withdraws';

@Component({
  selector: 'app-users-withdraw-cards',
  templateUrl: './users-withdraw-cards.component.html',
  styleUrls: ['./users-withdraw-cards.component.scss'],
})
export class UsersWithdrawCardsComponent {
  @Input() public filteredWithdraw: WithdrawList[];
  @Input() public affiliatesValues: number;
  @Input() public affiliatesQuantity: number;
  @Input() public playersValues: number;
  @Input() public playersQuantity: number;
  @Input() public subAffiliatesValues: number;
  @Input() public subAffiliatesQuantity: number;
  @Input() public allValues: number;
  @Input() public currentDate: Date;

  @Input() public startDate: string;
  @Input() public endDate: string;

  constructor() {
    this.filteredWithdraw = [];
    this.currentDate = new Date();
    this.subAffiliatesQuantity = 0;
    this.subAffiliatesValues = 0;
    this.affiliatesQuantity = 0;
    this.affiliatesValues = 0;
    this.playersQuantity = 0;
    this.playersValues = 0;

    this.allValues = 0;

    this.startDate = '';
    this.endDate = '';
  }

  public getAllQuantity(): number {
    return (
      this.playersQuantity +
      this.affiliatesQuantity +
      this.subAffiliatesQuantity
    );
  }
  public getAverageTicket(totalValue: number, quantity: number): number {
    return quantity === 0 ? 0 : totalValue / quantity;
  }

  public getSubtitle(): string {
    if (this.startDate && this.endDate) {
      const formattedStartDate = this.formatDate(new Date(this.startDate));
      const formattedEndDate = this.formatDate(new Date(this.endDate));
      return `De ${formattedStartDate} à ${formattedEndDate}`;
    } else {
      const currentDate = new Date();
      const today = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
      );

      const lastWithdrawDate = new Date(this.filteredWithdraw[0]?.date);

      const formattedToday = this.formatDate(today);
      const formattedLastWithdrawDate = this.formatDate(lastWithdrawDate);

      if (!lastWithdrawDate || formattedLastWithdrawDate === formattedToday) {
        return 'Hoje';
      } else {
        return formattedLastWithdrawDate;
      }
    }
  }

  public formatDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
}
