import { Component, OnInit } from '@angular/core';
import {Department} from "../../../models/department";
import {DepartmentService} from "../../../services/department.service";
import {EmployeeService} from "../../../services/employee.service";
import {Employee} from "../../../models/employee";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  employees?: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe(employees => {
      this.employees = employees;
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

}
