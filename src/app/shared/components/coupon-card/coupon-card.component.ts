import { Component, Input, ViewChild } from '@angular/core';
import { Coupon } from '../../interfaces/coupon';
import { DialogCouponEditComponent } from '../dialog-coupon-edit/dialog-coupon-edit.component';

@Component({
  selector: 'app-coupon-card',
  templateUrl: './coupon-card.component.html',
  styleUrls: ['./coupon-card.component.scss'],
})
export class CouponCardComponent {
  @Input() public coupons: Coupon[];
  public openedCouponId: number;
  public editingCoupon: Coupon;
  public isExpirable: boolean;

  public code: string;
  public couponId: number;
  public copiedCouponCode: string;

  public newCoupon: Coupon;

  @ViewChild(DialogCouponEditComponent)
  public editPopup?: DialogCouponEditComponent;

  constructor() {
    this.coupons = [];
    this.code = '';
    this.couponId = 0;
    this.openedCouponId = 0;
    this.copiedCouponCode = '';
    this.editingCoupon = {} as Coupon;
    this.isExpirable = false;
    this.newCoupon = {
      id: 0,
      name: 'Novo cupom',
      usageCount: 0,
      adminName: '',
      adminEmail: '',
      creationTime: '',
      expirationTime: '',
      maxUsage: 0,
      code: '',
      status: '',
      description: '',
    };
  }

  public getCurrentDate(): string {
    return new Date().toISOString();
  }

  public toggleDropdown(couponId: number) {
    if (this.openedCouponId === couponId) {
      this.openedCouponId = 0;
    } else {
      this.openedCouponId = couponId;
    }
  }

  public copyCouponCode(code: string) {
    navigator.clipboard.writeText(code.toUpperCase());
    this.copiedCouponCode = code.toUpperCase();
  }

  public openEditPopup(coupon: Coupon) {
    if (this.editPopup) {
      this.editPopup.openPopup();
      this.editPopup.editingCoupon = coupon;
      this.editPopup.verifyCheckbox();
    }
  }
  public openNewCouponPopup() {
    this.openEditPopup(this.newCoupon);
  }
}
