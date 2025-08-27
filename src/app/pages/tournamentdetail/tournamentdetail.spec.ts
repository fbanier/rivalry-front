import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tournamentdetail } from './tournamentdetail';

describe('Tournamentdetail', () => {
  let component: Tournamentdetail;
  let fixture: ComponentFixture<Tournamentdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tournamentdetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tournamentdetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
