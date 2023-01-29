import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Department} from "../../../models/department";

@Component({
  selector: 'app-department-modal',
  templateUrl: './department-modal.component.html',
  styleUrls: ['./department-modal.component.scss']
})
export class DepartmentModalComponent implements OnInit {

  @Output() closeModal = new EventEmitter<void>();
  @Output() changeDepartment = new EventEmitter<Department>();

  @Input() set setDepartment(dep: Department) {
    if (!dep) {
      this.setEmptyDepartment();
      return;
    }

    this.department = JSON.parse(JSON.stringify(dep));
  }

  department!: Department;

  constructor() {
    this.setEmptyDepartment();
  }

  ngOnInit(): void {
  }

  onChangeDepartment() {
    this.changeDepartment.emit(this.department);
  }

  onCloseModal() {
    this.closeModal.emit();
  }

  setEmptyDepartment() {
    this.department = {
      name: '',
      description: ''
    }
  }

}
