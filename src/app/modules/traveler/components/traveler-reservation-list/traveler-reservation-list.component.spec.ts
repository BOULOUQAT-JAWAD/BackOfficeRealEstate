import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelerReservationListComponent } from './traveler-reservation-list.component';

describe('TravelerReservationListComponent', () => {
  let component: TravelerReservationListComponent;
  let fixture: ComponentFixture<TravelerReservationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelerReservationListComponent]
    });
    fixture = TestBed.createComponent(TravelerReservationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
