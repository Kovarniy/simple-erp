import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DepartmentRoutingModule} from "./departments-routing.module";
import {DepartmentsListComponent} from "./departments-list/departments-list.component";
import {DepartmentItemComponent} from "./department-item/department-item.component";
import { DepartmentCreateComponent } from './department-create/department-create.component';
import {BsModalService, ModalModule} from "ngx-bootstrap/modal";

@NgModule({
  declarations: [
    DepartmentsListComponent,
    DepartmentItemComponent,
    DepartmentCreateComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    ModalModule
  ],
  providers: [
    BsModalService
  ]
})
export class DepartmentModule { }
