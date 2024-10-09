import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgChartsModule } from 'ng2-charts';
import { MaterialModule } from './material.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

import { MenuComponent } from '../components/menu/menu.component';
import { InputComponent } from '../components/input/input.component';
import { ButtonComponent } from '../components/button/button.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { UsersTableComponent } from '../components/users-table/users-table.component';
import { DialogAlertComponent } from '../components/dialog-alert/dialog-alert.component';
import { HomeCardComponent } from '../components/home-card/home-card/home-card.component';
import { SelectOptionComponent } from '../components/select-option/select-option.component';
import { UserInfoCardComponent } from '../components/user-info-card/user-info-card.component';
import { DefaultButtonComponent } from '../components/default-button/default-button.component';
import { NewUsersChartComponent } from '../components/new-users-chart/new-users-chart.component';
import { TablePaginatorComponent } from '../components/table-paginator/table-paginator.component';
import { ActiveUsersChartComponent } from '../components/active-users-chart/active-users-chart.component';
import { DialogUsersExportsComponent } from '../components/dialog-users-exports/dialog-users-exports.component';
import { DialogUserSettingsComponent } from '../components/dialog-user-settings/dialog-user-settings.component';
import { CardFilterButtonComponent } from '../components/filter-button/card-filter-button/card-filter-button.component';
import { DialogCreateDemoAccountComponent } from '../components/dialog-create-demo-account/dialog-create-demo-account.component';
import { ConfigBannerComponent } from '../components/config-banner/config-banner.component';
import { ConfigDepositComponent } from '../components/config-deposit/config-deposit.component';
import { DialogConfigBannerComponent } from '../components/dialog-config-banner/dialog-config-banner.component';
import { DialogConfigSiteComponent } from '../components/dialog-config-site/dialog-config-site.component';
import { ConfigWithdrawComponent } from '../components/config-withdraw/config-withdraw.component';
import { ConfigBonusComponent } from '../components/config-bonus/config-bonus.component';
import { DialogConfigBonusComponent } from '../components/dialog-config-bonus/dialog-config-bonus.component';
import { ConfigIndicationComponent } from '../components/config-indication/config-indication.component';
import { ConfigSupportComponent } from '../components/config-support/config-support.component';
import { DialogConfigSupportComponent } from '../components/dialog-config-support/dialog-config-support.component';
import { ConfigTrackingPixelsComponent } from '../components/config-tracking-pixels/config-tracking-pixels.component';
import { DialogConfigTrackingComponent } from '../components/dialog-config-tracking/dialog-config-tracking.component';
import { UsersDepositComponent } from '../components/users-deposit/users-deposit.component';
import { DepositCardComponent } from '../components/deposit-card/deposit-card.component';
import { UsersTop100Component } from '../components/users-top100/users-top100.component';
import { UsersWithdrawComponent } from '../components/users-withdraw/users-withdraw.component';
import { UsersWithdrawCardsComponent } from '../components/users-withdraw-cards/users-withdraw-cards.component';
import { CouponCardComponent } from '../components/coupon-card/coupon-card.component';
import { DialogCouponEditComponent } from '../components/dialog-coupon-edit/dialog-coupon-edit.component';

@NgModule({
  declarations: [
    MenuComponent,
    InputComponent,
    ButtonComponent,
    HomeCardComponent,
    SearchBarComponent,
    UsersTableComponent,
    DialogAlertComponent,
    SelectOptionComponent,
    ConfigBannerComponent,
    UserInfoCardComponent,
    DefaultButtonComponent,
    NewUsersChartComponent,
    ConfigDepositComponent,
    TablePaginatorComponent,
    ConfigWithdrawComponent,
    DialogConfigSiteComponent,
    CardFilterButtonComponent,
    ActiveUsersChartComponent,
    DialogUserSettingsComponent,
    DialogUsersExportsComponent,
    DialogCreateDemoAccountComponent,
    DialogConfigBannerComponent,
    ConfigBonusComponent,
    DialogConfigBonusComponent,
    ConfigIndicationComponent,
    ConfigSupportComponent,
    DialogConfigSupportComponent,
    ConfigTrackingPixelsComponent,
    DialogConfigTrackingComponent,
    UsersDepositComponent,
    DepositCardComponent,
    UsersTop100Component,
    UsersWithdrawComponent,
    UsersWithdrawCardsComponent,
    CouponCardComponent,
    DialogCouponEditComponent
  ],
  imports: [
    FormsModule,
    NgxMaskPipe,
    CommonModule,
    RouterModule,
    MaterialModule,
    NgChartsModule,
    NgxMaskDirective,
    CurrencyMaskModule,
  ],
  exports: [
    NgxMaskPipe,
    RouterModule,
    MenuComponent,
    InputComponent,
    MaterialModule,
    ButtonComponent,
    NgxMaskDirective,
    HomeCardComponent,
    SearchBarComponent,
    CurrencyMaskModule,
    UsersTableComponent,
    DialogAlertComponent,
    UserInfoCardComponent,
    ConfigBannerComponent,
    SelectOptionComponent,
    ConfigDepositComponent,
    DefaultButtonComponent,
    NewUsersChartComponent,
    TablePaginatorComponent,
    ConfigWithdrawComponent,
    ActiveUsersChartComponent,
    CardFilterButtonComponent,
    DialogConfigSiteComponent,
    DialogUserSettingsComponent,
    DialogUsersExportsComponent,
    DialogCreateDemoAccountComponent,
    DialogConfigBannerComponent,
    ConfigBonusComponent,
    DialogConfigBonusComponent,
    ConfigIndicationComponent,
    ConfigSupportComponent,
    DialogConfigSupportComponent,
    ConfigTrackingPixelsComponent,
    DialogConfigTrackingComponent,
    UsersDepositComponent,
    DepositCardComponent,
    UsersTop100Component,
    UsersWithdrawComponent,
    UsersWithdrawCardsComponent,
    CouponCardComponent,
    DialogCouponEditComponent
  ],
  providers: [provideNgxMask()],
})
export class SharedModule {}
