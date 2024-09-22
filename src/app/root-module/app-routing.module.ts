import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../modules/auth/componenets/login/login.component';
import { MyDashboardComponent } from '../modules/admin-dashboard/components/my-dashboard/my-dashboard.component';
import { PjServiceFormComponent } from '../modules/pj-services/components/pj-service-form/pj-service-form.component';
import { PjServicesListComponent } from '../modules/pj-services/components/pj-services-list/pj-services-list.component';
import { PropertiesListComponent } from '../modules/properties/components/properties-list/properties-list.component';
import { ReservationListComponent } from '../modules/reservation/components/reservation-list/reservation-list.component';
import { PropertyDetailsComponent } from '../modules/properties/components/property-details/property-details.component';
import { PjServicesSingleComponent } from '../modules/pj-services/components/pj-services-single/pj-services-single.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {
    path: "admin",
    children: [
      { path: "dashboard", component: MyDashboardComponent, },
      { path: "services", component: PjServicesListComponent, },
      { path: 'services/:id', component: PjServicesSingleComponent },
      { path: 'service/add', component: PjServiceFormComponent },
      { path: 'service/edit/:id', component: PjServiceFormComponent },
      { path: "properties", component: PropertiesListComponent, },
      { path: "reservations", component: ReservationListComponent, },
      { path: "properties/:id", component: PropertyDetailsComponent },
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
