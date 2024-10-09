import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deposit-card',
  templateUrl: './deposit-card.component.html',
  styleUrls: ['./deposit-card.component.scss'],
})
export class DepositCardComponent {
  @Input() public volumeDeposits: number;
  @Input() public quantityDeposits: number;
  @Input() public averageTicket: number;
  @Input() public lastDate: string;
  @Input() public startDate: string | undefined; // Alterado para string
  @Input() public endDate: string | undefined; // Alterado para string
  @Input() public selectedStatus: string;

  constructor() {
    this.selectedStatus = 'todos';
    this.volumeDeposits = 0;
    this.averageTicket = 0;
    this.quantityDeposits = 0;
    this.lastDate = '';
  }

  isToday(dateString: string | undefined): boolean {
    if (!dateString) return false; // Se a data for indefinida, retorna falso
    const date = new Date(dateString);
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }
  
  

  public isFilteredByDate(): boolean {
    return (
      this.startDate !== undefined &&
      this.endDate !== undefined &&
      !this.isToday(this.startDate) &&
      !this.isToday(this.endDate)
    );
  }
  
  
}
