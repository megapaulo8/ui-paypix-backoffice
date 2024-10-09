import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigBonusComponent } from './config-bonus.component';

describe('ConfigBonusComponent', () => {
  let component: ConfigBonusComponent;
  let fixture: ComponentFixture<ConfigBonusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigBonusComponent]
    });
    fixture = TestBed.createComponent(ConfigBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
