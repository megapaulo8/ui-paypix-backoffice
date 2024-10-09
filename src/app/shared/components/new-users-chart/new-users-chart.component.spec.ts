import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUsersChartComponent } from './new-users-chart.component';

describe('NewUsersChartComponent', () => {
  let component: NewUsersChartComponent;
  let fixture: ComponentFixture<NewUsersChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewUsersChartComponent]
    });
    fixture = TestBed.createComponent(NewUsersChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
