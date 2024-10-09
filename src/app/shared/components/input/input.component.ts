import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() public type: string;
  @Input() public mask?: string;
  @Input() public value: string;
  @Input() public prefix?: string;
  @Input() public iconName: string;
  @Input() public disabled: boolean;
  @Input() public placeholder: string;
  @Input() public hasCurrencyMask: boolean;
  
  @Output() public typing = new EventEmitter<any>();

  constructor() {
    this.type = '';
    this.value = '';
    this.iconName = '';
    this.placeholder = '';
    this.disabled = false;
    this.hasCurrencyMask = false;
  }

}
