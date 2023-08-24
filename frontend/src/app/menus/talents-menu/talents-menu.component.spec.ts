import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsMenuComponent } from './talents-menu.component';

describe('SkillsMenuComponent', () => {
  let component: SkillsMenuComponent;
  let fixture: ComponentFixture<SkillsMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsMenuComponent]
    });
    fixture = TestBed.createComponent(SkillsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
