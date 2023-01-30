import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employess-list/employees-list.component';
import { EmployeeItemComponent } from './employee-item/employee-item.component';
import {EmployeeRoutingModule} from "./employee-routing.module";
import { EmployeeModalComponent } from './employee-modal/employee-modal.component';
import {BsModalService, ModalModule} from "ngx-bootstrap/modal";
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {ScrollingModule} from '@angular/cdk/scrolling';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ErpCommonModule} from "../common/erp-common.module";

@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeeItemComponent,
    EmployeeModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    EmployeeRoutingModule,
    FormsModule,
    NgSelectModule,
    ScrollingModule,
    FontAwesomeModule,
    ErpCommonModule
  ],
  providers: [
    BsModalService
  ]
})
export class EmployeeModule { }
