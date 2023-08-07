import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesMenuComponent } from './races-menu.component';

describe('RacesMenuComponent', () => {
  let component: RacesMenuComponent;
  let fixture: ComponentFixture<RacesMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RacesMenuComponent]
    });
    fixture = TestBed.createComponent(RacesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
