export interface Department {
  id?: number;
  name: string;
  description: string;
}

export interface DepartmentResponse {
  values: Department[];
  status: number;
}
