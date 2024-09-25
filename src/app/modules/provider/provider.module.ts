import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderListComponent } from './components/provider-list/provider-list.component';
import { SharedModule } from "../../shared/shared.module";
import { ProviderInvoicesComponent } from './components/provider-invoices/provider-invoices.component';



@NgModule({
  declarations: [
    ProviderListComponent,
    ProviderInvoicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
],
exports : [ProviderListComponent]
})
export class ProviderModule { }
