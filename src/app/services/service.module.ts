import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SchoolService
} from "./service.index";
import { HttpClientModule } from "@angular/common/http";
//import { AdminGuard } from './admin.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SchoolService //servicio para el manejo de la info de escuela
  ]
})
export class ServiceModule { }
