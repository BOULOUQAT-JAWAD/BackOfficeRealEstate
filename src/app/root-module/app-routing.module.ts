import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../modules/auth/componenets/login/login.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  // {
  //   path: "client",
  //   children: [
  //     { path: "dashboard", component: MyDashboardComponent, },
  //     { path: "reservations", component: ReservationListComponent, },
  //     { path: "providerInvoices/properties", component: ProviderInvoicesListComponent, },
  //     { path: "properties", component: PropertiesListComponent, },
  //     { path: "properties/:id", component: PropertyDetailsComponent },
  //     { path: 'property/add', component: PropertyFormComponent },
  //     { path: 'property/edit/:id', component: PropertyFormComponent },
  //     { path: 'property/delete/:id', component: PropertySingleComponent },
  //     { path: 'PjServices', component: PjServicesListComponent },
  //     { path: 'cart', component: CartComponent },
  //     { path: 'servicePayed', component: CartSuccessComponent }


  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
