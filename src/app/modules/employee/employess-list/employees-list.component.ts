import {Component, OnInit, TemplateRef} from '@angular/core';
import {EmployeeService} from "../../../services/employee.service";
import {Employee} from "../../../models/employee";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {DepartmentService} from "../../../services/department.service";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [];

  modalRef?: BsModalRef;

  constructor(private employeeService: EmployeeService,
              private departmentService: DepartmentService,
              private modalService: BsModalService) { }

  ngOnInit(): void {
    this.employeeService.getAll()
      .pipe(switchMap(employees => {
        this.employees = employees;

        return this.departmentService.getAll()
      }))
      .subscribe(departments => {

    });
  }

  onDelete(id: number | undefined) {
    if (!id) {
      return;
    }

    this.employeeService.delete(id)
      .subscribe(res => {
        this.employees =this.employees?.filter(emp => emp.id !== id);
      });
  }

  onOpenAddModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      keyboard: true
    })
  }

  onAddEmployee(employee: Employee) {
    this.employeeService.add(employee)
      .subscribe(id => {
        employee.id = id;
        this.employees = [...this.employees, employee];
        this.modalRef?.hide();
      });
  }

  onChangeEmployee(employee: Employee) {
    this.employeeService.update(employee)
      .subscribe(res => {
      });
  }

}
