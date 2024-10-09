import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Alert } from '../../interfaces/alert';

@Component({
  selector: 'app-dialog-alert',
  templateUrl: './dialog-alert.component.html',
  styleUrls: ['./dialog-alert.component.scss']
})
export class DialogAlertComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public alert: Alert,
    public dialogRef: MatDialogRef<DialogAlertComponent>
  ) {}

}
