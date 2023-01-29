import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {Employee} from "../../../models/employee";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {

  @Input() employee!: Employee;

  @Output() delete = new EventEmitter<void>();

  @Output() change = new EventEmitter<void>();

  modalRef?: BsModalRef;

  bufferEmployee!: Employee;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.delete.emit();
  }

  onOpenEditModal(template: TemplateRef<any>) {
    this.bufferEmployee = JSON.parse(JSON.stringify(this.employee));
    this.modalRef = this.modalService.show(template, {
      keyboard: true
    })
  }

  onChangeEmployee(_employee: Employee) {
    this.employee.lastName = _employee.lastName;
    this.employee.firstName = _employee.firstName;
    this.employee.departmentId = _employee.departmentId;

    this.modalRef?.hide();
    this.change.emit();
  }

  onCloseModal() {
    this.modalRef?.hide();
  }

}
