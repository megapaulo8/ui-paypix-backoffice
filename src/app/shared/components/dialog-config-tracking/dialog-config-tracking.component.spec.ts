import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfigTrackingComponent } from './dialog-config-tracking.component';

describe('DialogConfigTrackingComponent', () => {
  let component: DialogConfigTrackingComponent;
  let fixture: ComponentFixture<DialogConfigTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogConfigTrackingComponent]
    });
    fixture = TestBed.createComponent(DialogConfigTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
