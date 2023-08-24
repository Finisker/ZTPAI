import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalCharacterMiniatureComponent } from './functional-character-miniature.component';

describe('FunctionalCharacterMiniatureComponent', () => {
  let component: FunctionalCharacterMiniatureComponent;
  let fixture: ComponentFixture<FunctionalCharacterMiniatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionalCharacterMiniatureComponent]
    });
    fixture = TestBed.createComponent(FunctionalCharacterMiniatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
