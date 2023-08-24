import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceSummaryComponent } from './race-summary.component';

describe('RaceSummaryComponent', () => {
  let component: RaceSummaryComponent;
  let fixture: ComponentFixture<RaceSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaceSummaryComponent]
    });
    fixture = TestBed.createComponent(RaceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
