import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  private timeoutTextSearch: any;

  @Input() public value: string;
  @Input() public placeholder: string;

  @Output() public searchByText = new EventEmitter<string>();

  constructor() {
    this.value = '';
    this.placeholder = '';
  }

  public onKeySearch(event: any): void {
    clearTimeout(this.timeoutTextSearch);
    let $this = this;
    this.timeoutTextSearch = setTimeout(function () {
      if (event.keyCode != 13) $this.searchByText.emit(event.target.value);
    }, 500);
  }

}
