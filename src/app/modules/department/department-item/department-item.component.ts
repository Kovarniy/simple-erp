import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {Department} from "../../../models/department";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-department-item',
  templateUrl: './department-item.component.html',
  styleUrls: ['./department-item.component.scss']
})
export class DepartmentItemComponent implements OnInit {

  @Input() department!: Department;

  @Output() delete = new EventEmitter<void>();

  @Output() change = new EventEmitter<void>();

  modalRef?: BsModalRef;

  bufferDepartment!: Department;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.delete.emit();
  }

  onOpenEditModal(template: TemplateRef<any>) {
    this.bufferDepartment = JSON.parse(JSON.stringify(this.department));
    this.modalRef = this.modalService.show(template, {
      keyboard: true
    })
  }

  onChangeDepartment(_department: Department) {
    this.department.name = _department.name;
    this.department.description = _department.description;
    this.modalRef?.hide();

    this.change.emit();
  }

  onCloseModal() {
    this.modalRef?.hide();
  }
}
