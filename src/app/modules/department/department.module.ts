import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DepartmentRoutingModule} from "./departments-routing.module";
import {DepartmentsListComponent} from "./departments-list/departments-list.component";
import {DepartmentItemComponent} from "./department-item/department-item.component";
import { DepartmentModalComponent } from './department-modal/department-modal.component';
import {BsModalService, ModalModule} from "ngx-bootstrap/modal";
import {FormsModule} from "@angular/forms";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

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
    FormsModule,
    ScrollingModule,
    FontAwesomeModule
  ],
  providers: [
    BsModalService
  ]
})
export class DepartmentModule { }
