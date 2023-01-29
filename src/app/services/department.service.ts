import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Department, DepartmentResponse} from "../models/department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) {
  }

  /**
   * Получить все департаменты.
   */
  public getAll(): Observable<Department[]> {
    return this.http.get<DepartmentResponse>('departments')
      .pipe(
        map(departmets => departmets.values
        ))
  }

  /**
   * Получить департамент по id.
   * @param id идентификатор депариамента.
   */
  public getById(id: number): Observable<Department[]> {
    return this.http.get<DepartmentResponse>('departments/' + id)
      .pipe(
        map(departmets => departmets.values
        ))
  }

  /**
   * Добавить новый департамент
   * @param department
   */
  public add(department: Department): Observable<number> {
    return this.http.post('departments/add', department)
      .pipe(
        map((response: any) => response.status)
      )
  }

  /**
   * Обновить модель департамента.
   * @param department
   */
  public update(department: Department): Observable<number> {
    return this.http.put('departments', department)
      .pipe(
        map((response: any) => response.status)
      )
  }

  /**
   * Удалить департамент по id.
   * @param id идентификатор департамента.
   */
  public delete(id: number): Observable<any> {
    return this.http.delete('departments/delete/' + id)
      .pipe(
        map((response: any) => response.status)
      )
  }

}
