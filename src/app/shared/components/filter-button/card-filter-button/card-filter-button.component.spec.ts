import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilterButtonComponent } from './card-filter-button.component';

describe('CardFilterButtonComponent', () => {
  let component: CardFilterButtonComponent;
  let fixture: ComponentFixture<CardFilterButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFilterButtonComponent]
    });
    fixture = TestBed.createComponent(CardFilterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
