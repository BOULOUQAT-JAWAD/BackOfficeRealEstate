import { Component, OnInit } from '@angular/core';
import { Reservation, Traveler } from '../../models/traveler.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelerService } from '../../services/traveler.service';

@Component({
  selector: 'app-traveler-reservation-list',
  templateUrl: './traveler-reservation-list.component.html',
  styleUrls: ['./traveler-reservation-list.component.scss']
})
export class TravelerReservationListComponent implements OnInit{
  traveler: Traveler | null = null;
  reservations : Reservation[] | undefined = [];

  constructor(private route: ActivatedRoute, private travelerService: TravelerService, private router: Router) { }

  ngOnInit(): void {
    const travelerIdParam = this.route.snapshot.paramMap.get('travelerId');
    const travelerId = travelerIdParam ? +travelerIdParam : null;
  
    if (travelerId !== null) {
      this.travelerService.getTravelers().subscribe((data: Traveler[]) => {
        this.traveler = data.find(traveler => traveler.travelerId === travelerId) || null;
        this.reservations = this.traveler?.reservations;
      });
    } else {
      // Handle the case where travelerId is null (e.g., redirect or show error)
      console.error('Invalid traveler ID');
    }
  }

  viewReservationServices(reservationId: number): void {
    // Navigate to the reservation services component with the reservation ID
    this.router.navigate(['/admin/reservation-services', reservationId]);
  }
  
}
