import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mytournaments } from './mytournaments';

describe('Mytournaments', () => {
  let component: Mytournaments;
  let fixture: ComponentFixture<Mytournaments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mytournaments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mytournaments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
