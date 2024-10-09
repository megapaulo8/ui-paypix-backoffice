import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersWithdrawCardsComponent } from './users-withdraw-cards.component';

describe('UsersWithdrawCardsComponent', () => {
  let component: UsersWithdrawCardsComponent;
  let fixture: ComponentFixture<UsersWithdrawCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersWithdrawCardsComponent]
    });
    fixture = TestBed.createComponent(UsersWithdrawCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
