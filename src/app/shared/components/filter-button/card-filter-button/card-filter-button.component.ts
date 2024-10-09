import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-filter-button',
  templateUrl: './card-filter-button.component.html',
  styleUrls: ['./card-filter-button.component.scss'],
})
export class CardFilterButtonComponent {

  public endDate!: Date;
  public startDate!: Date;

  @Output() public dateRangeSelected = new EventEmitter<{
    startDate: Date;
    endDate: Date;
  }>();

  public emitDateRange(): void {
    if (this.startDate && this.endDate) {
      this.dateRangeSelected.emit({
        startDate: this.startDate,
        endDate: this.endDate,
      });
    }
  }
}
