import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterTextSummaryComponent } from './character-text-summary.component';

describe('CharacterTextSummaryComponent', () => {
  let component: CharacterTextSummaryComponent;
  let fixture: ComponentFixture<CharacterTextSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterTextSummaryComponent]
    });
    fixture = TestBed.createComponent(CharacterTextSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
