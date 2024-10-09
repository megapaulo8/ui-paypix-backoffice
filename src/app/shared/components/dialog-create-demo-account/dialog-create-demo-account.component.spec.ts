import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateDemoAccountComponent } from './dialog-create-demo-account.component';

describe('DialogCreateDemoAccountComponent', () => {
  let component: DialogCreateDemoAccountComponent;
  let fixture: ComponentFixture<DialogCreateDemoAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCreateDemoAccountComponent]
    });
    fixture = TestBed.createComponent(DialogCreateDemoAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
