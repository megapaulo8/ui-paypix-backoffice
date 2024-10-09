import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TrackingList } from '../../interfaces/config-tracking-list';

@Component({
  selector: 'app-dialog-config-tracking',
  templateUrl: './dialog-config-tracking.component.html',
  styleUrls: ['./dialog-config-tracking.component.scss'],
})
export class DialogConfigTrackingComponent {
  public trackingData: TrackingList;

  constructor(
    public dialogRef: MatDialogRef<DialogConfigTrackingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TrackingList
  ) {
    this.trackingData = data
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public saveDialog(): void {
    this.dialogRef.close(this.trackingData);
  }
}
