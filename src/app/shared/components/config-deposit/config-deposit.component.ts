import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { SiteData } from '../../interfaces/config-site';

@Component({
  selector: 'app-config-deposit',
  templateUrl: './config-deposit.component.html',
  styleUrls: ['./config-deposit.component.scss'],
})
export class ConfigDepositComponent implements OnInit {
  @Input() public siteData: SiteData[];
  public minValue: number;
  public maxValue: number;
  public disableMaxLimit: boolean;
  public showSuccessPopup: boolean;

  @Output() public saveDepositConfig: EventEmitter<SiteData[]> = new EventEmitter();

  constructor() {
    this.siteData = [];
    this.minValue = 0;
    this.maxValue = 0;
    this.disableMaxLimit = false;
    this.showSuccessPopup = false;
  }

  ngOnInit(): void {
    if (this.siteData[0] && this.siteData.length > 0) {
      this.minValue = this.siteData[0].deposit_config.deposit_min;
      this.maxValue = this.siteData[0].deposit_config.deposit_max;
      this.disableMaxLimit = this.siteData[0].deposit_config.deposit_limit;
    }
  }

  public btnClose(): void {
    this.showSuccessPopup = false;
  }

  public saveChanges(): void {
    const existingSiteData: SiteData = this.siteData[0];

    existingSiteData.deposit_config.deposit_min = this.minValue;
    existingSiteData.deposit_config.deposit_max = this.maxValue;
    existingSiteData.deposit_config.deposit_limit = this.disableMaxLimit;

    this.saveDepositConfig.emit([existingSiteData]);
  
    this.showSuccessPopup = true;
  
    setTimeout(() => {
      this.showSuccessPopup = false;
    }, 10000);
  }
  
}
