import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employess-list/employees-list.component';
import { EmployeeItemComponent } from './employee-item/employee-item.component';
import {EmployeeRoutingModule} from "./employee-routing.module";

@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeeItemComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
