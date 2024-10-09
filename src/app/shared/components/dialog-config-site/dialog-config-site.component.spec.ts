import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfigSiteComponent } from './dialog-config-site.component';

describe('DialogConfigSiteComponent', () => {
  let component: DialogConfigSiteComponent;
  let fixture: ComponentFixture<DialogConfigSiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogConfigSiteComponent]
    });
    fixture = TestBed.createComponent(DialogConfigSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
