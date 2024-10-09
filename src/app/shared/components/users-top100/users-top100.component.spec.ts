import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTop100Component } from './users-top100.component';

describe('UsersTop100Component', () => {
  let component: UsersTop100Component;
  let fixture: ComponentFixture<UsersTop100Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersTop100Component]
    });
    fixture = TestBed.createComponent(UsersTop100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
