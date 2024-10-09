import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SiteData } from '../../interfaces/config-site';
import { ConfigTrackingPixels } from '../../interfaces/config-tracking-pixels';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfigTrackingComponent } from '../dialog-config-tracking/dialog-config-tracking.component';

@Component({
  selector: 'app-config-tracking-pixels',
  templateUrl: './config-tracking-pixels.component.html',
  styleUrls: ['./config-tracking-pixels.component.scss'],
})
export class ConfigTrackingPixelsComponent {
  @Input() public trackingData: SiteData[];

  @Output() public saveTrackingData: EventEmitter<SiteData[]> =
    new EventEmitter<SiteData[]>();

  constructor(private dialog: MatDialog) {
    this.trackingData = [];
  }

  public openDialog(index:number): void {
    const dialogRef = this.dialog.open(DialogConfigTrackingComponent, {
      width: '50vw',
      data: this.trackingData[0].tracking_config.tracking_list[index]
    });
  }

  public saveChanges() {
    this.saveTrackingData.emit(this.trackingData)
  }
}
