import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigBannerComponent } from './config-banner.component';

describe('ConfigBannerComponent', () => {
  let component: ConfigBannerComponent;
  let fixture: ComponentFixture<ConfigBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigBannerComponent]
    });
    fixture = TestBed.createComponent(ConfigBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
