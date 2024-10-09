import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './core/page/page.component';
import { HttpModule } from './core/modules/http/http.module';
import { SharedModule } from './shared/modules/shared.module';
import { ConfigComponent } from './config/config.component';
import { DepositComponent } from './deposit/deposit.component';
import { Top100Component } from './top100/top100.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { CouponComponent } from './coupon/coupon.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    UsersComponent,
    DepositComponent,
    Top100Component,
    WithdrawComponent,
    ConfigComponent,
    DepositComponent,
    CouponComponent,
  ],
  imports: [
    HttpModule,
    NgxMaskPipe,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    NgxMaskDirective,
    CurrencyMaskModule,
    BrowserAnimationsModule
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule {}
