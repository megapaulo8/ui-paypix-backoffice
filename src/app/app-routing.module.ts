import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './shared/services/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { PageComponent } from './core/page/page.component';
import { ConfigComponent } from './config/config.component';
import { CouponComponent } from './coupon/coupon.component';
import { Top100Component } from './top100/top100.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { ConfigBannerComponent } from './shared/components/config-banner/config-banner.component';
import { UsersWithdrawComponent } from './shared/components/users-withdraw/users-withdraw.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'logged',
    component: PageComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'user/:id',
        component: UserComponent,
      },
      {
        path: 'settings',
        component: ConfigComponent,
      },
      {
        path: 'deposits',
        component: DepositComponent
      },
      {
        path: 'top-users',
        component: Top100Component
      },
      {
        path: 'withdrawals',
        component: WithdrawComponent
      },
      {
        path: 'coupon',
        component: CouponComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
