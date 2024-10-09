import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { Filter } from '../../interfaces/filter';

@Component({
  selector: 'app-table-paginator',
  templateUrl: './table-paginator.component.html',
  styleUrls: ['./table-paginator.component.scss']
})
export class TablePaginatorComponent implements OnInit, OnChanges {

  public buttons: Array<number>;
  public paginationButtons: Array<number>;

  @Input() public filter: Filter;

  @Output() public changePage = new EventEmitter<number>();

  constructor() {
    this.buttons = [];
    this.filter = {} as Filter;
    this.paginationButtons = [];
  }

  ngOnInit(): void {
    this.calculateTotalButtons(this.filter.itemsPerPage, this.filter.totalItems!);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filter'] && changes['filter'].currentValue && !changes['filter'].firstChange) this.calculateTotalButtons(this.filter.itemsPerPage, this.filter.totalItems!);
  }

  private calculateTotalButtons(itemsPerPage: number, totalItems: number): void {
    this.buttons = [];
    this.paginationButtons = [];
    let totalButtons = Math.ceil(totalItems / itemsPerPage);
    for (let i = 0; i < totalButtons; i++) this.buttons.push(i);
    if (totalButtons > 5) {
      for (let i = 0; i < 5; i++) this.paginationButtons.push(i);
      this.paginationButtons.push(totalButtons - 1);
    }
  }

  public calculateGridTemplateColumns(totalItems: number): string {
    let gridTemplateColumns = '';
    for (let i = 0; i <= totalItems; i++) gridTemplateColumns += ' 1fr';
    return gridTemplateColumns;
  }

  public changePagination(button: number, index: number): void {
    this.changePage.emit(button);
    if (button === this.buttons[0]) for (let i = 1; i < 5; i++) this.paginationButtons[i] = i;
    else if (button === this.buttons[this.buttons.length - 1]) for (let i = 4; i > 0; i--) this.paginationButtons[i] = button - ((4-i)+1);
    else if (index >= (this.paginationButtons.length - 3) && (button < (this.buttons[this.buttons.length - 1] - 2))) this.paginationButtons = this.paginationButtons.map(paginationButton => (paginationButton === 0) || (paginationButton === this.buttons[this.buttons.length - 1]) ? paginationButton : paginationButton + 1);
    else if ((index === 1) && (button - 1 > 0)) this.paginationButtons = this.paginationButtons.map(paginationButton => (paginationButton === 0) || (paginationButton === this.buttons[this.buttons.length - 1]) ? paginationButton : paginationButton - 1);
  }

}
