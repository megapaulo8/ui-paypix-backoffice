import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SiteData } from '../../interfaces/config-site';

@Component({
  selector: 'app-dialog-config-site',
  templateUrl: './dialog-config-site.component.html',
  styleUrls: ['./dialog-config-site.component.scss'],
})
export class DialogConfigSiteComponent {
  public logo: string;
  public favicon: string;

  constructor(
    public dialogRef: MatDialogRef<DialogConfigSiteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { siteData: SiteData[] }
  ) {
    this.logo = data.siteData[0].logo;
    this.favicon = data.siteData[0].favicon;
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public saveChanges(): void {
    this.data.siteData[0].logo = this.logo;
    this.data.siteData[0].favicon = this.favicon;
    
    this.dialogRef.close(this.data);
  }
}
