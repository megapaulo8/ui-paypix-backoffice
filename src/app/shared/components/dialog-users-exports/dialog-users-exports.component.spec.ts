import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUsersExportsComponent } from './dialog-users-exports.component';

describe('DialogUsersExportsComponent', () => {
  let component: DialogUsersExportsComponent;
  let fixture: ComponentFixture<DialogUsersExportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogUsersExportsComponent]
    });
    fixture = TestBed.createComponent(DialogUsersExportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
