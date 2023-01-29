import { Component } from '@angular/core';
import {DepartmentService} from "./services/department.service";
import {EmployeeService} from "./services/employee.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private d: EmployeeService) {
    d.delete(3).subscribe(res => {
      console.log(res)
    },
      error => {
        console.log(error)
      }
      )
  }

}
