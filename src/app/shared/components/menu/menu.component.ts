import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MenuLayout } from '../../interfaces/menu-layout';
import { UserLoggedData } from '../../interfaces/user-logged-data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() public menu: MenuLayout;
  @Input() public currentPath: string;
  @Input() public userInfo: UserLoggedData;
  
  @Output() public pathTo = new EventEmitter<string>();
  @Output() public clickUserLogout = new EventEmitter();

  constructor() {
    this.menu = {
      logo: '',
      buttons: []
    }
    this.currentPath = '';
    this.userInfo = {
      email: '',
      token: '',
      username: ''
    }
  }
}
