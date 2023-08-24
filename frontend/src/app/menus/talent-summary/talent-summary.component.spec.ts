import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentSummaryComponent } from './talent-summary.component';

describe('TalentSummaryComponent', () => {
  let component: TalentSummaryComponent;
  let fixture: ComponentFixture<TalentSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalentSummaryComponent]
    });
    fixture = TestBed.createComponent(TalentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
