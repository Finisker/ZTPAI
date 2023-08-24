import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesMenuComponent } from './attributes-menu.component';

describe('AttributesMenuComponent', () => {
  let component: AttributesMenuComponent;
  let fixture: ComponentFixture<AttributesMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttributesMenuComponent]
    });
    fixture = TestBed.createComponent(AttributesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
