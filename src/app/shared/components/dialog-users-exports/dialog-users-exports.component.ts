import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Export } from '../../interfaces/export';

@Component({
  selector: 'app-dialog-users-exports',
  templateUrl: './dialog-users-exports.component.html',
  styleUrls: ['./dialog-users-exports.component.scss']
})
export class DialogUsersExportsComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public exports: Array<Export>,
    public dialogRef: MatDialogRef<DialogUsersExportsComponent>
  ) {}
}
