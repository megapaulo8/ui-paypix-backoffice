import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfigBonusComponent } from './dialog-config-bonus.component';

describe('DialogConfigBonusComponent', () => {
  let component: DialogConfigBonusComponent;
  let fixture: ComponentFixture<DialogConfigBonusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogConfigBonusComponent]
    });
    fixture = TestBed.createComponent(DialogConfigBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
