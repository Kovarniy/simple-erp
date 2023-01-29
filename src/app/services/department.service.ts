import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {Department, DepartmentResponse} from "../models/department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments$:BehaviorSubject<Department[]> = new BehaviorSubject<Department[]>([]);

  constructor(private http: HttpClient) {
  }

  /**
   * Получить все департаменты.
   */
  public getAll(): Observable<Department[]> {
    return this.http.get<DepartmentResponse>('api/departments')
      .pipe(
        map(departments => departments.values),
        tap(departments => this.departments$.next(departments))
      )
  }

  public getDepartments() {
    return this.departments$;
  }

  /**
   * Получить департамент по id.
   * @param id идентификатор депариамента.
   */
  public getById(id: number): Observable<Department[]> {
    return this.http.get<DepartmentResponse>('api/departments/' + id)
      .pipe(
        map(departmets => departmets.values
        ))
  }

  /**
   * Добавить новый департамент
   * @param department
   */
  public add(department: Department): Observable<number> {
    return this.http.post('api/departments/add', department)
      .pipe(
        map((response: any) => response.status)
      )
  }

  /**
   * Обновить модель департамента.
   * @param department
   */
  public update(department: Department): Observable<number> {
    return this.http.put('api/departments', department)
      .pipe(
        map((response: any) => response.status)
      )
  }

  /**
   * Удалить департамент по id.
   * @param id идентификатор департамента.
   */
  public delete(id: number): Observable<any> {
    return this.http.delete('api/departments/delete/' + id)
      .pipe(
        map((response: any) => response.status)
      )
  }

}
