export interface Employee {
  id?: number;
  firstName: string;
  lastName: string;
  departmentId: number;
}

export interface EmployeeResponse {
  values: Employee[];
  status: number;
}
