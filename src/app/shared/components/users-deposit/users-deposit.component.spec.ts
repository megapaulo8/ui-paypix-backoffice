import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDepositComponent } from './users-deposit.component';

describe('UsersDepositComponent', () => {
  let component: UsersDepositComponent;
  let fixture: ComponentFixture<UsersDepositComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersDepositComponent]
    });
    fixture = TestBed.createComponent(UsersDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
