import { Component, OnInit } from '@angular/core';
import { ReservationService, Traveler } from '../../models/traveler.model';
import { ActivatedRoute } from '@angular/router';
import { TravelerService } from '../../services/traveler.service';

@Component({
  selector: 'app-traveler-reservation-service-list',
  templateUrl: './traveler-reservation-service-list.component.html',
  styleUrls: ['./traveler-reservation-service-list.component.scss']
})
export class TravelerReservationServiceListComponent implements OnInit{
  reservationServices: ReservationService[] | undefined = [];
  traveler: Traveler | null = null;

  constructor(private route: ActivatedRoute, private travelerService: TravelerService) { }

  ngOnInit(): void {
    const reservationIdParam = this.route.snapshot.paramMap.get('reservationId');
    const reservationId = reservationIdParam ? +reservationIdParam : null;

    if (reservationId !== null) {
      // Fetch travelers and filter the services based on the reservationId
      this.travelerService.getTravelers().subscribe((data: Traveler[]) => {
        // Find the traveler that has the reservation services for the given reservationId
        for (let traveler of data) {
          const reservation = traveler.reservations?.find(res => res.reservationId === reservationId);
          if (reservation) {
            this.traveler = traveler;
            this.reservationServices = reservation.reservationServices;
            break;
          }
        }
      });
    } else {
      console.error('Invalid reservation ID');
    }
  }

}
