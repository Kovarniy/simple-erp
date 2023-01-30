export interface Employee {
  id?: number;
  firstName: string;
  lastName: string;
  departmentId: number;

  /**
   * only front
   */
  departmentName?: string;
}

export interface EmployeeResponse {
  values: Employee[];
  status: number;
}
