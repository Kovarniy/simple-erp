import { Component, OnInit } from '@angular/core';
import {DepartmentService} from "../../../services/department.service";
import {Department} from "../../../models/department";

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.scss']
})
export class DepartmentsListComponent implements OnInit {

  departments?: Department[];

  constructor(private departmentService: DepartmentService) { }

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

    });
  }
}
