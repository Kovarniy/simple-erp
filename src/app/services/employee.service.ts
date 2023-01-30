import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Employee, EmployeeResponse} from "../models/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  /**
   * Получить всех работников.
   */
  public getAll(): Observable<Employee[]> {
    return this.http.get<EmployeeResponse>('api/employees')
      .pipe(
        map(employee => employee.values
        ))
  }

  /**
   * Получить работника по id.
   * @param id идентификатор работника.
   */
  public getById(id: number): Observable<Employee[]> {
    return this.http.get<EmployeeResponse>('api/employees/' + id)
      .pipe(
        map(employee => employee.values
        ))
  }

  /**
   * Добавить нового работника.
   * @param employee
   * @return id добавленного объекта.
   */
  public add(employee: Employee): Observable<number> {
    return this.http.post('api/employees/add', employee)
      .pipe(
        map((response: any) => response.values.insertId)
      )
  }

  /**
   * Обновить модель работника.
   * @param employee
   */
  public update(employee: Employee): Observable<number> {
    return this.http.put('api/employees', employee)
      .pipe(
        map((response: any) => response.status)
      )
  }

  /**
   * Удалить работника по id.
   * @param id идентификатор работника.
   */
  public delete(id: number): Observable<any> {
    return this.http.delete('api/employees/delete/' + id)
      .pipe(
        map((response: any) => response.status)
      )
  }

}
