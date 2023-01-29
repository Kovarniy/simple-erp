import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employee} from "../../../models/employee";

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {

  @Input() employee?: Employee;

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
