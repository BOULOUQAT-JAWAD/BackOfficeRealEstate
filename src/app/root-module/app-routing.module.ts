import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../modules/auth/componenets/login/login.component';
import { MyDashboardComponent } from '../modules/admin-dashboard/components/my-dashboard/my-dashboard.component';
import { PjServiceFormComponent } from '../modules/pj-services/components/pj-service-form/pj-service-form.component';
import { PjServicesListComponent } from '../modules/pj-services/components/pj-services-list/pj-services-list.component';
import { PropertiesListComponent } from '../modules/properties/components/properties-list/properties-list.component';
import { ReservationListComponent } from '../modules/reservation/components/reservation-list/reservation-list.component';
import { PropertyDetailsComponent } from '../modules/properties/components/property-details/property-details.component';
import { PropertyFormComponent } from '../modules/properties/components/property-form/property-form.component';
import { ClientListComponent } from '../modules/clients/components/client-list/client-list.component';
import { SubscriptionListComponent } from '../modules/clients/components/subscription-list/subscription-list.component';
import { ProviderListComponent } from '../modules/provider/components/provider-list/provider-list.component';
import { ProviderInvoicesComponent } from '../modules/provider/components/provider-invoices/provider-invoices.component';
import { TravlerListComponent } from '../modules/traveler/components/travler-list/travler-list.component';
import { TravelerReservationListComponent } from '../modules/traveler/components/traveler-reservation-list/traveler-reservation-list.component';
import { TravelerReservationServiceListComponent } from '../modules/traveler/components/traveler-reservation-service-list/traveler-reservation-service-list.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {
    path: "admin",
    children: [
      { path: "dashboard", component: MyDashboardComponent, },
      { path: "services", component: PjServicesListComponent, },
      { path: 'service/add', component: PjServiceFormComponent },
      { path: 'service/edit/:id', component: PjServiceFormComponent },
      { path: "properties", component: PropertiesListComponent, },
      { path: "reservations", component: ReservationListComponent, },
      { path: "properties/:id", component: PropertyDetailsComponent },
      { path: "client/all", component: ClientListComponent },
      { path: "provider/all", component: ProviderListComponent },
      { path: 'providers/:id/invoices', component: ProviderInvoicesComponent }, // Route for viewing invoices
      { path: "client/subscription/:clientId", component: SubscriptionListComponent },
      { path: "traveler/all", component: TravlerListComponent },
      { path: 'traveler/reservations/:travelerId', component: TravelerReservationListComponent },
      { path: 'reservation-services/:reservationId', component: TravelerReservationServiceListComponent }


      // { path: 'property/add', component: PropertyFormComponent },
      // { path: 'property/edit/:id', component: PropertyFormComponent }
      // { path: "providerInvoices/properties", component: ProviderInvoicesListComponent, },,
      // { path: 'property/delete/:id', component: PropertySingleComponent },
      // { path: 'PjServices', component: PjServicesListComponent },
      // { path: 'cart', component: CartComponent },
      // { path: 'servicePayed', component: CartSuccessComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
