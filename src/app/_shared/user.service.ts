import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Accounts, User} from "./interfaces/user";
import {environment} from "../../environments/environment";
import {Employee} from "./interfaces/employee";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;
  localBaseUrl = environment.localBaseUrl;
  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  };

  getUser(id:string): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  };

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.localBaseUrl}/employees`);
  };

  getEmployee(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.localBaseUrl}/employees/${id}`);
  };

  addNewEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(`${this.localBaseUrl}/employees`, employee)
  }

  getAccounts():Observable<Accounts[]>{
    return this.http.get<Accounts[]>(`${this.localBaseUrl}/accounts`);
  };

}
