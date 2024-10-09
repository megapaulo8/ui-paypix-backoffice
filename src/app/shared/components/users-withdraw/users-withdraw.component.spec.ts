import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersWithdrawComponent } from './users-withdraw.component';

describe('UsersWithdrawComponent', () => {
  let component: UsersWithdrawComponent;
  let fixture: ComponentFixture<UsersWithdrawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersWithdrawComponent]
    });
    fixture = TestBed.createComponent(UsersWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
