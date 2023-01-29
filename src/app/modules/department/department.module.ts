import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DepartmentRoutingModule} from "./departments-routing.module";
import {DepartmentsListComponent} from "./departments-list/departments-list.component";
import {DepartmentItemComponent} from "./department-item/department-item.component";

@NgModule({
  declarations: [
    DepartmentsListComponent,
    DepartmentItemComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
