import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './components/client-list/client-list.component';
import { SharedModule } from "../../shared/shared.module";
import { SubscriptionListComponent } from './components/subscription-list/subscription-list.component';



@NgModule({
  declarations: [
    ClientListComponent,
    SubscriptionListComponent
  ],
  exports : [ClientListComponent],
  imports: [
    CommonModule,
    SharedModule
]
})
export class ClientsModule { }
