import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTournaments } from './profile-tournaments';

describe('ProfileTournaments', () => {
  let component: ProfileTournaments;
  let fixture: ComponentFixture<ProfileTournaments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileTournaments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileTournaments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
