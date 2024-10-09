import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDepositComponent } from './config-deposit.component';

describe('ConfigDepositComponent', () => {
  let component: ConfigDepositComponent;
  let fixture: ComponentFixture<ConfigDepositComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigDepositComponent]
    });
    fixture = TestBed.createComponent(ConfigDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
