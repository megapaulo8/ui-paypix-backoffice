import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigIndicationComponent } from './config-indication.component';

describe('ConfigIndicationComponent', () => {
  let component: ConfigIndicationComponent;
  let fixture: ComponentFixture<ConfigIndicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigIndicationComponent]
    });
    fixture = TestBed.createComponent(ConfigIndicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
