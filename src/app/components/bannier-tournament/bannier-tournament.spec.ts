import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannierTournament } from './bannier-tournament';

describe('BannierTournament', () => {
  let component: BannierTournament;
  let fixture: ComponentFixture<BannierTournament>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannierTournament]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannierTournament);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
