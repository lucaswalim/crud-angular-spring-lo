import { SharedModule } from './../shared/shared.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule, // Módulo Criado para centralizar a importação do Angular Material
    SharedModule
  ]
})
export class CoursesModule { }
