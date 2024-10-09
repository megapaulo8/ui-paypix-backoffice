import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigWithdrawComponent } from './config-withdraw.component';

describe('ConfigWithdrawComponent', () => {
  let component: ConfigWithdrawComponent;
  let fixture: ComponentFixture<ConfigWithdrawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigWithdrawComponent]
    });
    fixture = TestBed.createComponent(ConfigWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
