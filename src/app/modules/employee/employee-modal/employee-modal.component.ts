import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employee} from "../../../models/employee";
import {DepartmentService} from "../../../services/department.service";
import {Department} from "../../../models/department";

@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.scss']
})
export class EmployeeModalComponent implements OnInit {

  @Output() closeModal = new EventEmitter<void>();
  @Output() changeEmployee = new EventEmitter<Employee>();

  @Input() set setEmployee(emp: Employee) {
    if (!emp) {
      this.setEmptyEmployee();
      return;
    }

    this.employee = emp;
  }

  employee!: Employee;

  departments!: Department[];

  departmentId!: number;

  constructor(private departmentService: DepartmentService) {
    this.setEmptyEmployee();
  }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(departments => {
      this.departments = departments;
      this.departmentId = this.employee.departmentId;
    })
  }

  setEmptyEmployee() {
    this.employee = {
      firstName: '',
      lastName: '',
      departmentId: 0
    }
  }

  onChangeEmployee() {
    this.employee.departmentId = this.departmentId;
    this.changeEmployee.emit(this.employee);
  }

  onCloseModal() {
    this.closeModal.emit();
  }

}
