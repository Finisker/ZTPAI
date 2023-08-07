import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionsMenuComponent } from './professions-menu.component';

describe('ProfessionsMenuComponent', () => {
  let component: ProfessionsMenuComponent;
  let fixture: ComponentFixture<ProfessionsMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionsMenuComponent]
    });
    fixture = TestBed.createComponent(ProfessionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
