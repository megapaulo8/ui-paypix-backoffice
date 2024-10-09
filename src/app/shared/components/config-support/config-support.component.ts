import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SiteData } from '../../interfaces/config-site';
import { ConfigSupport } from '../../interfaces/config-support';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfigSupportComponent } from '../dialog-config-support/dialog-config-support.component';

@Component({
  selector: 'app-config-support',
  templateUrl: './config-support.component.html',
  styleUrls: ['./config-support.component.scss'],
})
export class ConfigSupportComponent {
  @Input() public supportConfig: SiteData[];

  @Output() public saveSupportConfig: EventEmitter<SiteData[]> =
    new EventEmitter<SiteData[]>();

  constructor(private dialog: MatDialog) {
    this.supportConfig = [];
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogConfigSupportComponent, {
      width: '50vw',
      data: this.supportConfig[0].support_config,
    });
  }

  public saveChanges(): void {
    this.saveSupportConfig.emit(this.supportConfig);
  }
}
