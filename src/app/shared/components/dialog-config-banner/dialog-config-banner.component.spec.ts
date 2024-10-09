import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfigBannerComponent } from './dialog-config-banner.component';

describe('DialogConfigBannerComponent', () => {
  let component: DialogConfigBannerComponent;
  let fixture: ComponentFixture<DialogConfigBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogConfigBannerComponent]
    });
    fixture = TestBed.createComponent(DialogConfigBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
