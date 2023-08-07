import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProffessionSummaryComponent } from './proffession-summary.component';

describe('ProffessionSummaryComponent', () => {
  let component: ProffessionSummaryComponent;
  let fixture: ComponentFixture<ProffessionSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProffessionSummaryComponent]
    });
    fixture = TestBed.createComponent(ProffessionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
