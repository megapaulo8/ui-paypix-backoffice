import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SiteData } from '../../interfaces/config-site';

@Component({
  selector: 'app-config-withdraw',
  templateUrl: './config-withdraw.component.html',
  styleUrls: ['./config-withdraw.component.scss'],
})
export class ConfigWithdrawComponent implements OnInit {
  @Input() public siteData: SiteData[];
  @Output() public saveWithdrawConfig: EventEmitter<{
    accountType: string;
    siteData: SiteData;
  }> = new EventEmitter();

  public accountType: string;
  public autoWithdrawConfig: boolean;
  public selectedOption: string;
  public isOpen: boolean;
  public accountTypeOpen: boolean;

  constructor() {
    this.siteData = [];
    this.accountType = 'jogadores';
    this.autoWithdrawConfig = false;
    this.selectedOption = '';
    this.isOpen = false;
    this.accountTypeOpen = false;
  }

  ngOnInit(): void {
    this.selectedOption = this.siteData[0].withdraw_config.withdraw_fee_type;
  }

  public selectAccountType(selectedType: string): void {
    this.accountType = selectedType;
    this.accountTypeOpen = false;
  }

  public onAccountTypeChange(): void {
    console.log(this.accountType);
  }

  public toggleMenu(): void {
    this.isOpen = !this.isOpen;
    this.accountTypeOpen = false;
  }

  public selectOption(option: string): void {
    this.selectedOption = option;
    this.isOpen = false;
  }

  public saveChanges(): void {
    this.saveWithdrawConfig.emit({
      accountType: this.accountType,
      siteData: this.siteData[0],
    });
  }
}
