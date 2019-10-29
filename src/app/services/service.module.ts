import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SchoolService,
  GroupTemplateService,
  GroupService
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
    SchoolService, //servicio para el manejo de la info de escuela
    GroupTemplateService, //para el manejo de los groupTemplate
    GroupService //manejo de Grupos instanciados
  ]
})
export class ServiceModule { }
