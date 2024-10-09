import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUserSettingsComponent } from './dialog-user-settings.component';

describe('DialogUserSettingsComponent', () => {
  let component: DialogUserSettingsComponent;
  let fixture: ComponentFixture<DialogUserSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogUserSettingsComponent]
    });
    fixture = TestBed.createComponent(DialogUserSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
