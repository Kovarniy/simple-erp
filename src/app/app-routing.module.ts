import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'departments',
    loadChildren: () => import('./modules/department/department.module').then(m => m.DepartmentModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
