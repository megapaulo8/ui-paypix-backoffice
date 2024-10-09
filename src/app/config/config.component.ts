import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { SiteData } from '../shared/interfaces/config-site';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit {
  public siteData: SiteData[];
  public currentConfig: string;

  constructor(private userService: UsersService) {
    this.siteData = [];
    this.currentConfig = 'banner';
  }

  ngOnInit(): void {
    this.getSiteData();
  }

  private getSiteData(): void {
    this.userService.getSiteData().subscribe((data) => {
      this.siteData = data;
      console.log(this.siteData);
    });
  }

  public showConfig(configType: string): void {
    switch (configType) {
      case 'banner':
        this.currentConfig = 'banner';
        break;
      case 'deposit':
        this.currentConfig = 'deposit';
        break;
      case 'withdraw':
        this.currentConfig = 'withdraw';
        break;
      case 'bonus':
        this.currentConfig = 'bonus';
        break;
      default:
        console.error('Tipo de configuração inválido:', configType);
        break;
    }
  }

  public setCurrentConfig(configType: string): void {
    this.currentConfig = configType;
  }

  public saveConfigSite(configSite: SiteData[]): void {
    console.log('Dados do site: ', configSite);
  }

  public saveDepositConfig(configDeposit: SiteData[]): void {
    console.log('Dados do depósito salvos no ConfigComponent:', configDeposit);
  }

  public saveWithdrawConfig(withdrawConfigData: {
    accountType: string;
    siteData: SiteData;
  }): void {
    console.log('Dados vindos de withdraw: ', withdrawConfigData);
    console.log('Tipo de conta:', withdrawConfigData.accountType);
    console.log('Dados de configuração:', withdrawConfigData.siteData);
  }

  public saveBonusConfig(configBonusData: SiteData[]) {
    console.log('Dados do bonus salvos no ConfigComponent:', configBonusData);
  }

  public saveConfigIndication(configIndicationData: SiteData[]) {
    console.log("Dados de Indicação salvos: ", configIndicationData)
  }

  public saveSupportConfig(configSupportData: SiteData[]) {
    console.log("Dados de Suporte salvos: ", configSupportData)
  }

  public saveTrackingConfig(configTrackingData: SiteData[]) {
    console.log("Dados de Tracking & Pixels salvos: ", configTrackingData)
  }
}
