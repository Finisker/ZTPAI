import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterMiniatureComponent } from './character-miniature.component';

describe('CharacterMiniatureComponent', () => {
  let component: CharacterMiniatureComponent;
  let fixture: ComponentFixture<CharacterMiniatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterMiniatureComponent]
    });
    fixture = TestBed.createComponent(CharacterMiniatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
