import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravlerListComponent } from './components/travler-list/travler-list.component';
import { SharedModule } from "../../shared/shared.module";
import { TravelerReservationListComponent } from './components/traveler-reservation-list/traveler-reservation-list.component';
import { TravelerReservationServiceListComponent } from './components/traveler-reservation-service-list/traveler-reservation-service-list.component';



@NgModule({
  declarations: [
    TravlerListComponent,
    TravelerReservationListComponent,
    TravelerReservationServiceListComponent
    ],
  imports: [
    CommonModule,
    SharedModule
],
exports : [
  TravlerListComponent,
  TravelerReservationListComponent
]
})
export class TravelerModule { }
