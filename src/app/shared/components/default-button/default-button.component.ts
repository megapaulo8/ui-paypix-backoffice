import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss']
})
export class DefaultButtonComponent {

  @Input() public text: string;
  @Input() public iconUrl: string;

  @Output() public clicked = new EventEmitter();

  constructor() {
    this.text = '';
    this.iconUrl = '';
  }

}
