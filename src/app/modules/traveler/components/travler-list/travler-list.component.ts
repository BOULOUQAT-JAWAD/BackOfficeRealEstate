import { Component, OnInit } from '@angular/core';
import { Traveler } from '../../models/traveler.model';
import { TravelerService } from '../../services/traveler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travler-list',
  templateUrl: './travler-list.component.html',
  styleUrls: ['./travler-list.component.scss']
})
export class TravlerListComponent implements OnInit {

  travelers: Traveler[] = [];

  constructor(private travelerService: TravelerService, private router: Router) { }

  ngOnInit(): void {
    this.travelerService.getTravelers().subscribe((data: Traveler[]) => {
      this.travelers = data;
    });
  }

  toggleActivation(traveler: Traveler): void {
    const newStatus = !traveler.activated;
    this.travelerService.toggleTravelerActivation(traveler.travelerId, newStatus).subscribe(
      () => {
        traveler.activated = newStatus; // Update local client data
      },
      (error) => {
        console.error('Error toggling activation status:', error);
      }
    );
  }


  viewSubscriptions(travelerId: number): void {
    console.log('View Subscriptions for Traveler ID:', travelerId);
  }

  viewReservations(travelerId: number): void {
    this.router.navigate(['/admin/traveler/reservations', travelerId]);
  }
}
