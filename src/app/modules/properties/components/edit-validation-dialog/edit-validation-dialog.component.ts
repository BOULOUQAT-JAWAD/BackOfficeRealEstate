import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-validation-dialog',
  templateUrl: './edit-validation-dialog.component.html',
  styleUrls: ['./edit-validation-dialog.component.scss']
})
export class EditValidationDialogComponent {
  selectedStatus: boolean;

  constructor(
    public dialogRef: MatDialogRef<EditValidationDialogComponent>, 
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