import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCouponEditComponent } from './dialog-coupon-edit.component';

describe('DialogCouponEditComponent', () => {
  let component: DialogCouponEditComponent;
  let fixture: ComponentFixture<DialogCouponEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCouponEditComponent]
    });
    fixture = TestBed.createComponent(DialogCouponEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
