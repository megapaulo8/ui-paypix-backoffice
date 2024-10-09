import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositCardComponent } from './deposit-card.component';

describe('DepositCardComponent', () => {
  let component: DepositCardComponent;
  let fixture: ComponentFixture<DepositCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositCardComponent]
    });
    fixture = TestBed.createComponent(DepositCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
