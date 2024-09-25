import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelerReservationServiceListComponent } from './traveler-reservation-service-list.component';

describe('TravelerReservationServiceListComponent', () => {
  let component: TravelerReservationServiceListComponent;
  let fixture: ComponentFixture<TravelerReservationServiceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelerReservationServiceListComponent]
    });
    fixture = TestBed.createComponent(TravelerReservationServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
