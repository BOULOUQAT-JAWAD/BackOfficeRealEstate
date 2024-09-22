import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root-component/app.component';
import {AuthModule} from "../modules/auth/auth.module";
// import { PropertiesModule } from '../modules/properties/properties.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CoreModule } from '../core/core.module';
// import { ProviderInvoicesModule } from '../modules/provider-invoices/provider-invoices.module';
// import { ClientDashboardModule } from '../modules/client-dashboard/client-dashboard.module';
// import { TravelerModule } from '../modules/traveler/traveler.module';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { TokenInterceptor } from '../modules/auth/interceptor/token.interceptor';
import { SharedModule } from '../shared/shared.module';
import { AdminDashboardModule } from '../modules/admin-dashboard/admin-dashboard.module';
import { PjServicesModule } from '../modules/pj-services/pj-services.module';
import { PropertiesModule } from '../modules/properties/properties.module';
import { ProviderInvoicesModule } from '../modules/provider-invoices/provider-invoices.module';
import { ReservationModule } from '../modules/reservation/reservation.module';
// import { CartModule } from '../modules/cart/cart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    AdminDashboardModule,
    SharedModule,
    PjServicesModule,
    PropertiesModule,
    BrowserAnimationsModule,
    ProviderInvoicesModule,
    ReservationModule,
    // CoreModule,
    // ClientDashboardModule,
    NgxWebstorageModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
