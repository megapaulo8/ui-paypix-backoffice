import { Component, Input } from '@angular/core';
import { Coupon } from '../../interfaces/coupon';

@Component({
  selector: 'app-dialog-coupon-edit',
  templateUrl: './dialog-coupon-edit.component.html',
  styleUrls: ['./dialog-coupon-edit.component.scss'],
})
export class DialogCouponEditComponent {
  @Input() public editingCoupon: Coupon;
  @Input() public isExpirable: boolean;
  public isOpen: boolean;
  public couponExpiration: boolean;
  public limitedQuantityChecked: boolean;
  public currentPopupIndex: number;
  public popups: any[];
  public numberOfPopups: number;

  constructor() {
    this.editingCoupon = {} as Coupon;
    this.couponExpiration = false;
    this.isOpen = false;
    this.isExpirable = false;
    this.currentPopupIndex = 0;
    this.popups = [];
    this.numberOfPopups = 3;
    this.limitedQuantityChecked = false;
  }

  public verifyCheckbox(): void {
    if (this.editingCoupon.expirationTime.length > 0) {
      this.couponExpiration = true;
    } else {
      this.couponExpiration = false;
    }
  }

  public isToday(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const hours = today.getHours().toString().padStart(2, '0');
    const minutes = today.getMinutes().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;
    return formattedDate;
  }

  public formatDateForInput(dateString: string): string {
    const date = new Date(dateString);
    const formattedDate = date.toISOString().slice(0, 16);
    return formattedDate;
  }

  public openPopup() {
    this.isOpen = true;
    this.currentPopupIndex = 0
    document.body.classList.add('popup-open');
  }

  public closePopup() {
    this.isOpen = false;
    document.body.classList.remove('popup-open');
  }

  public saveChanges() {
    this.closePopup();
  }

  public openPopupByIndex(index: number) {
    if (this.popups[index]) {
      this.currentPopupIndex = index;
    }
  }

  public openPreviousPopup() {
    if (this.currentPopupIndex > 0) {
      this.currentPopupIndex--;
    }
  }

  public openNextPopup() {
    if (this.currentPopupIndex < this.numberOfPopups - 1) {
      this.currentPopupIndex++;
    }
  }

  public toggleQuantitySection() {
    this.limitedQuantityChecked = !this.limitedQuantityChecked;
  }
}
