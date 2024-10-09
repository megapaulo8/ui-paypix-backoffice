import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfigSupportComponent } from './dialog-config-support.component';

describe('DialogConfigSupportComponent', () => {
  let component: DialogConfigSupportComponent;
  let fixture: ComponentFixture<DialogConfigSupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogConfigSupportComponent]
    });
    fixture = TestBed.createComponent(DialogConfigSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
