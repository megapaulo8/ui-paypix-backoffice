import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfigSupport } from '../../interfaces/config-support';

@Component({
  selector: 'app-dialog-config-support',
  templateUrl: './dialog-config-support.component.html',
  styleUrls: ['./dialog-config-support.component.scss'],
})
export class DialogConfigSupportComponent {
  public supportData: ConfigSupport;

  constructor(
    public dialogRef: MatDialogRef<DialogConfigSupportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfigSupport
  ) {
    this.supportData = data;
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
  public saveDialog(): void {
    this.dialogRef.close(this.supportData);
  }
}
