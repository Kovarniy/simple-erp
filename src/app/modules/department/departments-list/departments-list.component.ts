import {Component, OnInit, TemplateRef} from '@angular/core';
import {DepartmentService} from "../../../services/department.service";
import {Department} from "../../../models/department";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.scss']
})
export class DepartmentsListComponent implements OnInit {

  departments: Department[] = [];
  modalRef?: BsModalRef;

  constructor(private departmentService: DepartmentService,
              private modalService: BsModalService) { }

  ngOnInit(): void {
    this.departmentService.getAll().subscribe(departments => {
      this.departments = departments;
    });
  }

  onDelete(id: number | undefined) {
    if (!id) {
      return;
    }

    this.departmentService.delete(id)
      .subscribe(res => {
        this.departments =this.departments?.filter(dep => dep.id !== id);
    });
  }

  onOpenAddModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      keyboard: true
    })
  }

  onAddDepartment(department: Department) {
    this.departmentService.add(department)
      .subscribe(res => {
        this.departments = [...this.departments, department]
        this.modalRef?.hide();
      });
  }

  onChangeDepartment(department: Department) {
    this.departmentService.update(department)
      .subscribe(res => {
      });
  }
}
