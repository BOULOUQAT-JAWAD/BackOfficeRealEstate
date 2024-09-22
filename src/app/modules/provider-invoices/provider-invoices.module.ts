import { NgModule } from '@angular/core';
import { ProviderInvoicesListComponent } from './components/provider-invoices-list/provider-invoices-list.component';
import { ProviderInvoicesSingleComponent } from './components/provider-invoices-single/provider-invoices-single.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { EditStatusDialogComponent } from './components/edit-status-dialog/edit-status-dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ProviderInvoicesListComponent,
    ProviderInvoicesSingleComponent,
    EditStatusDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    ProviderInvoicesListComponent
  ]
})
export class ProviderInvoicesModule { }
