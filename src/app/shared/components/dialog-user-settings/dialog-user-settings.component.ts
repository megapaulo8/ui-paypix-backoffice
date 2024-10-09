import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { animate, style, transition, trigger } from '@angular/animations';

import { User } from '../../interfaces/user';

@Component({
  selector: 'app-dialog-user-settings',
  templateUrl: './dialog-user-settings.component.html',
  styleUrls: ['./dialog-user-settings.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(600, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class DialogUserSettingsComponent {

  public tabSelected: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public user: User,
    public dialogRef: MatDialogRef<DialogUserSettingsComponent>
  ) {
    this.tabSelected = 'wallet';
  }
}
