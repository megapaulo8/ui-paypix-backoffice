import { Component, Inject, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Banners } from '../../interfaces/banners';

@Component({
  selector: 'app-dialog-config-banner',
  templateUrl: './dialog-config-banner.component.html',
  styleUrls: ['./dialog-config-banner.component.scss'],
})
export class DialogConfigBannerComponent {
  public selectedBanner: Banners;

  constructor(
    public dialogRef: MatDialogRef<DialogConfigBannerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { banner: Banners }
  ) {
    this.selectedBanner = { ...data.banner };
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public saveChanges(): void {
    console.log('Dados do banner:', this.selectedBanner);
  
    this.dialogRef.close(this.selectedBanner);
  }
  
}
