import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProviderInvoiceStatus } from '../../models/provider-invoice';

@Component({
  selector: 'app-edit-status-dialog',
  templateUrl: './edit-status-dialog.component.html'
})
export class EditStatusDialogComponent {
  selectedStatus: string;
  statuses = Object.values(ProviderInvoiceStatus);

  constructor(
    public dialogRef: MatDialogRef<EditStatusDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.selectedStatus = data.status;
  }

  onSubmit(): void {
    this.dialogRef.close(this.selectedStatus);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}