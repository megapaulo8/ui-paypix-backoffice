import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Filter } from '../../interfaces/filter';
import { HeaderTable } from '../../interfaces/header-table';
import { InfoDepositTable } from '../../interfaces/info-deposit-table';

@Component({
  selector: 'app-users-deposit',
  templateUrl: './users-deposit.component.html',
  styleUrls: ['./users-deposit.component.scss'],
})
export class UsersDepositComponent {
  @Input() public filter: Filter;
  @Input() public headerTable: Array<HeaderTable>;
  @Input() public depositos: InfoDepositTable[];
  @Input() public filteredDeposits: InfoDepositTable[];

  @Output() public changePage = new EventEmitter<number>();
  @Output() public filterByHeaderColumn = new EventEmitter();
  @Output() public clickedEventDefaultButton = new EventEmitter();
  @Output() public dateRangeSelected = new EventEmitter<{
    startDate: Date;
    endDate: Date;
  }>();

  constructor() {
    this.headerTable = [];
    this.filter = {} as Filter;
    this.depositos = [];
    this.filteredDeposits = [];
  }

  public filterByHeader(filterBy: string, index: number): void {
    if (filterBy) this.filterByHeaderColumn.emit({ filterBy, index });
  }

  public calculateGridTemplateColumns(totalItems: number): string {
    let gridTemplateColumns = '';
    for (let i = 0; i < totalItems; i++) gridTemplateColumns += ' 1fr';
    return gridTemplateColumns;
  }

  public onDateRangeSelected(dateRange: {
    startDate: Date;
    endDate: Date;
  }): void {
    this.dateRangeSelected.emit(dateRange);
    this.filteredDeposits = this.depositos.filter((deposit) => {
      const depositDate = new Date(deposit.data_deposito);
      return (
        depositDate >= dateRange.startDate && depositDate <= dateRange.endDate
      );
    });
  }
}
