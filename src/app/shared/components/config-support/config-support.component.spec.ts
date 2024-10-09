import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigSupportComponent } from './config-support.component';

describe('ConfigSupportComponent', () => {
  let component: ConfigSupportComponent;
  let fixture: ComponentFixture<ConfigSupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigSupportComponent]
    });
    fixture = TestBed.createComponent(ConfigSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
