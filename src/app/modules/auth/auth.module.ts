import { NgModule } from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import { LoginComponent } from './componenets/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {LocalStorageService} from "ngx-webstorage";



@NgModule({
  declarations: [
    LoginComponent,
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgIf,
    ReactiveFormsModule,
    RouterLink
  ],
  providers : [
    LocalStorageService
  ]
})
export class AuthModule { }
