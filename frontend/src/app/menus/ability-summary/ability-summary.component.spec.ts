import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitySummaryComponent } from './ability-summary.component';

describe('AbilitySummaryComponent', () => {
  let component: AbilitySummaryComponent;
  let fixture: ComponentFixture<AbilitySummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbilitySummaryComponent]
    });
    fixture = TestBed.createComponent(AbilitySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
