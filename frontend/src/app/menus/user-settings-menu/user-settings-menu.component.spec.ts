import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsMenuComponent } from './user-settings-menu.component';

describe('UserSettingsComponent', () => {
  let component: UserSettingsMenuComponent;
  let fixture: ComponentFixture<UserSettingsMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSettingsMenuComponent]
    });
    fixture = TestBed.createComponent(UserSettingsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
