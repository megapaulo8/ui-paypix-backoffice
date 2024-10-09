import { Component, Input, EventEmitter, Output } from '@angular/core';
import { SiteData } from '../../interfaces/config-site';
import { ListConfigBonus } from '../../interfaces/config-bonuslist';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfigBonusComponent } from '../dialog-config-bonus/dialog-config-bonus.component';

@Component({
  selector: 'app-config-bonus',
  templateUrl: './config-bonus.component.html',
  styleUrls: ['./config-bonus.component.scss'],
})
export class ConfigBonusComponent {
  @Input() public siteData: SiteData[];
  @Output() public saveBonusConfig: EventEmitter<SiteData[]> =
    new EventEmitter<SiteData[]>();

  constructor(private dialog: MatDialog) {
    this.siteData = [];
  }

  public openDialog(index: number): void {
    const dialogRef = this.dialog.open(DialogConfigBonusComponent, {
      width: '300px',
      data: this.siteData[0].bonus_config.bonus_list[index],
    });
  }

  public saveBonus(): void {
    this.saveBonusConfig.emit(this.siteData);
  }
}
