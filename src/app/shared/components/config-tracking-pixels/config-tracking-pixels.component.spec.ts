import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTrackingPixelsComponent } from './config-tracking-pixels.component';

describe('ConfigTrackingPixelsComponent', () => {
  let component: ConfigTrackingPixelsComponent;
  let fixture: ComponentFixture<ConfigTrackingPixelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigTrackingPixelsComponent]
    });
    fixture = TestBed.createComponent(ConfigTrackingPixelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
