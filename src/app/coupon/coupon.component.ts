import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { Coupon } from '../shared/interfaces/coupon';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponComponent implements OnInit {
  public coupons: Coupon[];

  constructor(private usersService: UsersService) {
    this.coupons = [];
  }

  ngOnInit(): void {
    this.getCoupons();
  }

  private getCoupons(): void {
    this.usersService.getCoupons().subscribe((data) => {
      this.coupons = data;
    });
  }
}
