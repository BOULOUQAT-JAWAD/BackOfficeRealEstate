import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesListComponent } from './components/properties-list/properties-list.component';
import { PropertySingleComponent } from './components/property-single/property-single.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PropertyFormComponent } from './components/property-form/property-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppRoutingModule } from 'src/app/root-module/app-routing.module';
import { ReservationModule } from '../reservation/reservation.module';
import { PjServicesModule } from '../pj-services/pj-services.module';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { EditValidationDialogComponent } from './components/edit-validation-dialog/edit-validation-dialog.component';

@NgModule({
  declarations: [
    PropertiesListComponent,
    PropertySingleComponent,
    PropertyDetailsComponent,
    PropertyFormComponent,
    PropertyCardComponent,
    EditValidationDialogComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    ReservationModule,
    FormsModule,
    PjServicesModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
  ],
  exports: [
    PropertiesListComponent,
    PropertyDetailsComponent,
    PropertyFormComponent,
    PropertySingleComponent,
    PropertyCardComponent
  ] 
})
export class PropertiesModule { }
