import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.scss']
})
export class DepartmentCreateComponent implements OnInit {

  @Output() closeModal = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddDepartment() {

  }

  onCloseModal() {
    this.closeModal.emit();
  }
}
