import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SiteData } from '../../interfaces/config-site';
import { Banners } from '../../interfaces/banners';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfigBannerComponent } from '../dialog-config-banner/dialog-config-banner.component';
import { DialogConfigSiteComponent } from '../dialog-config-site/dialog-config-site.component';

@Component({
  selector: 'app-config-banner',
  templateUrl: './config-banner.component.html',
  styleUrls: ['./config-banner.component.scss'],
})
export class ConfigBannerComponent {
  @Input() public siteData: SiteData[];
  @Output() public bannerUpdated: EventEmitter<Banners> = new EventEmitter<Banners>();
  @Output() public siteDataUpdated: EventEmitter<SiteData[]> = new EventEmitter<SiteData[]>();
  
  constructor(private dialog: MatDialog) {
    this.siteData = [];
  }

  public openBannerDialog(banner?: Banners): void {
    const dialogRef = this.dialog.open(DialogConfigBannerComponent, {
      width: '50vw',
      data: { banner },
    });

    dialogRef.afterClosed().subscribe((result: Banners) => {
      this.bannerUpdated.emit(result);
    });
  }
  public openSiteConfigDialog(): void {
    const dialogRef = this.dialog.open(DialogConfigSiteComponent, {
      width: '50vw',
      data: { siteData: this.siteData },
    });

    dialogRef.afterClosed().subscribe((result: SiteData[]) => {
      this.siteDataUpdated.emit(result)
    });
  }

  public getNewContainerRepeatCount(): number[] {
    const maxBanners = 4;
    let totalBannerCount = 0;

    for (const site of this.siteData) {
      totalBannerCount += site.banners.length;
    }

    const additionalFieldsCount = Math.max(maxBanners - totalBannerCount, 0);
    return Array(additionalFieldsCount).fill(0);
  }
}
