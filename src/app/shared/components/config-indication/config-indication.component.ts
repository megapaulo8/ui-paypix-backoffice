import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { SiteData } from '../../interfaces/config-site';

@Component({
  selector: 'app-config-indication',
  templateUrl: './config-indication.component.html',
  styleUrls: ['./config-indication.component.scss'],
})
export class ConfigIndicationComponent implements OnInit {
  @Input() public siteData: SiteData[];
  public isOpenRewardIndicator: boolean;
  public isOpenRewardIndicated: boolean;
  public isOpenTypeRewardIndicated: boolean;
  public rewardTypeIndicator: string;
  public rewardTypeIndicatedType: string;
  public rewardTypeIndicated: string;

  @Output() public saveConfigIndication: EventEmitter<SiteData[]> =
    new EventEmitter<SiteData[]>();

  constructor() {
    this.siteData = [];
    this.isOpenRewardIndicator = false;
    this.isOpenRewardIndicated = false;
    this.isOpenTypeRewardIndicated = false;

    this.rewardTypeIndicator = 'saldo';
    this.rewardTypeIndicatedType = 'valor fixo';
    this.rewardTypeIndicated = 'saldo';
  }

  ngOnInit(): void {
    this.rewardTypeIndicator =
      this.siteData[0].indication_config.indicator_reward_type;
    this.rewardTypeIndicatedType =
      this.siteData[0].indication_config.indicated_reward;
    this.rewardTypeIndicated =
      this.siteData[0].indication_config.indicated_reward_type;
  }

  public toggleMenuRewardIndicator() {
    this.isOpenRewardIndicator = !this.isOpenRewardIndicator;
  }

  public toggleMenuRewardIndicated() {
    this.isOpenRewardIndicated = !this.isOpenRewardIndicated;
  }

  public toggleMenuTypeRewardIndicated() {
    this.isOpenTypeRewardIndicated = !this.isOpenTypeRewardIndicated;
  }

  public rewardChangeTypeIndicated(selection: string) {
    this.rewardTypeIndicated = selection;
    this.isOpenTypeRewardIndicated = false;
  }

  public rewardChangeIndicator(selection: string) {
    this.rewardTypeIndicator = selection;
    this.isOpenRewardIndicator = false;
  }

  public rewardChangeIndicatedType(selection: string) {
    this.rewardTypeIndicatedType = selection;
    this.isOpenRewardIndicated = false;
  }

  public saveChanges() {
    this.siteData[0].indication_config.indicator_reward_type =
      this.rewardTypeIndicator;
    this.siteData[0].indication_config.indicated_reward =
      this.rewardTypeIndicatedType;
    this.siteData[0].indication_config.indicated_reward_type =
      this.rewardTypeIndicated;

    this.saveConfigIndication.emit(this.siteData);
  }
}
