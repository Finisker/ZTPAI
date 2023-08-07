import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesMenuComponent } from './abilities-menu.component';

describe('AbilitiesMenuComponent', () => {
  let component: AbilitiesMenuComponent;
  let fixture: ComponentFixture<AbilitiesMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbilitiesMenuComponent]
    });
    fixture = TestBed.createComponent(AbilitiesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
