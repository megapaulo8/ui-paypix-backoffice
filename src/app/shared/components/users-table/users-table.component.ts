import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

import { Filter } from '../../interfaces/filter';
import { HeaderTable } from '../../interfaces/header-table';
import { ColumnUsersTable } from '../../interfaces/column-users-table';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {

  @Input() public filter: Filter;
  @Input() public headerTable: Array<HeaderTable>;
  @Input() public columnUsersTable: ColumnUsersTable;

  @Output() public changePage = new EventEmitter<number>();
  @Output() public filterByHeaderColumn = new EventEmitter();
  @Output() public clickedEventDefaultButton = new EventEmitter();

  constructor() {
    this.headerTable = [];
    this.filter = {} as Filter;
    this.columnUsersTable = {} as ColumnUsersTable;
  }

  public filterByHeader(filterBy: string, index: number): void {
    if (filterBy) this.filterByHeaderColumn.emit({filterBy, index});
  }

  public calculateGridTemplateColumns(totalItems: number): string {
    let gridTemplateColumns = '';
    for (let i = 0; i < totalItems; i++) gridTemplateColumns += ' 1fr';
    return gridTemplateColumns;
  }
}
