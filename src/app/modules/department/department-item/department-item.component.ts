import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Department} from "../../../models/department";

@Component({
  selector: 'app-department-item',
  templateUrl: './department-item.component.html',
  styleUrls: ['./department-item.component.scss']
})
export class DepartmentItemComponent implements OnInit {

  @Input() department?: Department;

  @Output() delete = new EventEmitter<void>();

  @Output() edit = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.delete.emit();
  }

  onEdit() {
    this.edit.emit();
  }

}
