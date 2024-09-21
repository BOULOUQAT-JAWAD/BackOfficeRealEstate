import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PjServicesListComponent } from './components/pj-services-list/pj-services-list.component';
import { PjServicesSingleComponent } from './components/pj-services-single/pj-services-single.component';
import { SharedModule } from "../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PjServiceFormComponent } from './components/pj-service-form/pj-service-form.component';



@NgModule({
  declarations: [
    PjServicesListComponent,
    PjServicesSingleComponent,
    PjServiceFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
], 
  exports:[
    PjServicesListComponent,
  ]
})
export class PjServicesModule {


 }
