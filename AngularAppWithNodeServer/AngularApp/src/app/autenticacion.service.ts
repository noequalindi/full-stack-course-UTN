import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(public http:HttpClient) { }
  login(data){
    return this.http.post("http://localhost:3000/autentication/login",data)
  }
}
