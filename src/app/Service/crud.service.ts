import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { register } from '../model/register';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  baseUrl="http://localhost:8083/auth/register"
  constructor(private httpcl:HttpClient)  { }
  registerUser(reg:register):Observable<Object>{
    console.log(reg)
    return this.httpcl.post(`${this.baseUrl}`,reg);
  }
}




 

