import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DepartmentRoutingModule} from "./departments-routing.module";
import {DepartmentsListComponent} from "./departments-list/departments-list.component";
import {DepartmentItemComponent} from "./department-item/department-item.component";
import { DepartmentModalComponent } from './department-modal/department-modal.component';
import {BsModalService, ModalModule} from "ngx-bootstrap/modal";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    DepartmentsListComponent,
    DepartmentItemComponent,
    DepartmentModalComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    ModalModule,
    FormsModule
  ],
  providers: [
    BsModalService
  ]
})
export class DepartmentModule { }
