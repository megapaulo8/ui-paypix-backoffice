import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-users-top100',
  templateUrl: './users-top100.component.html',
  styleUrls: ['./users-top100.component.scss'],
})
export class UsersTop100Component {
  @Input() public selectedCategory: string;
  @Input() public filteredTop100Data: any;

  constructor() {
    this.selectedCategory = 'apostas';
  }
}
