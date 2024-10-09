import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Button } from '../../interfaces/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() public button: Button;
  @Input() public class: string;
  
  @Output() public pathTo = new EventEmitter<string>();
  @Output() public clicked = new EventEmitter<string>();

  constructor() {
    this.class = '';
    this.button = {};
  }
}
