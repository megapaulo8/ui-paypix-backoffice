import { Component, Inject } from '@angular/core';
import { ListConfigBonus } from '../../interfaces/config-bonuslist';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-config-bonus',
  templateUrl: './dialog-config-bonus.component.html',
  styleUrls: ['./dialog-config-bonus.component.scss'],
})
export class DialogConfigBonusComponent {
  public bonusData: ListConfigBonus;

  constructor(
    public dialogRef: MatDialogRef<DialogConfigBonusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ListConfigBonus
  ) {
    this.bonusData = data;
  }

  public saveConfig(): void {
    this.dialogRef.close(this.bonusData);
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
