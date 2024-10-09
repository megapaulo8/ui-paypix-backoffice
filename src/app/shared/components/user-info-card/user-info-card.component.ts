import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.scss']
})
export class UserInfoCardComponent {

  @Input() public user: User;

  @Output() public redirectTo = new EventEmitter();
  @Output() public clickedEventDefaultButton = new EventEmitter();

  constructor() {
    this.user = {} as User;
  }

  public formatDocumentToBrazilianDocument(document: string): string {
    if (document) {
      let documentFormatted = document.replace(/[^\d]/g, "");
    
      return documentFormatted.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else return '';
  }

}
