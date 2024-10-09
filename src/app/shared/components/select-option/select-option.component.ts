import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';

import { Select } from '../../interfaces/select';
import { SelectOption } from '../../interfaces/select-option';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent implements AfterViewInit {

  private opened: boolean;
  private optionsHeight: number;

  @HostListener('document:click', ['$event'])
  DocumentClick(event: Event) {
    if (!this.elem.nativeElement.contains(event.target)) {
      this.opened = false;
      this.openOrCloseMenu(false);
    }
  }

  @ViewChild('optionsContainer') private optionsContainer: ElementRef;

  @Input() public select: Select;
  @Input() public selectedOption: SelectOption;

  @Output() public clickToSelectOption = new EventEmitter<SelectOption>();
  
  constructor(
    private elem: ElementRef
  ) {
    this.opened = false;
    this.optionsHeight = 0;
    this.select = {} as Select;
    this.optionsContainer = {} as ElementRef;
    this.selectedOption = {} as SelectOption;
  }

  ngAfterViewInit() {
    this.optionsHeight = this.optionsContainer.nativeElement.offsetHeight;
  }

  private openOrCloseMenu(toOpen: boolean): void {
    this.optionsContainer.nativeElement.style.height = toOpen ? this.optionsHeight + 'px' : '0px';
    this.optionsContainer.nativeElement.style.visibility = toOpen ? 'visible' : 'hidden';
    this.optionsContainer.nativeElement.style.opacity = toOpen ? 1 : 0;
  }

  public openOptionsMenu(): void {
    if (!this.opened) {
      this.opened = true;
      this.openOrCloseMenu(true);
    } else {
      this.opened = false;
      this.openOrCloseMenu(false);
    }
  }

  public optionMenuSelected(option: SelectOption): void {
    this.clickToSelectOption.emit(option);
    this.opened = false;
    this.openOrCloseMenu(false);
  }
}