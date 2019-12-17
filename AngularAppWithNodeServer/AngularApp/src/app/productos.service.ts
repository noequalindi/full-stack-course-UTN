import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { 

  }
  
  getProductos(){
    return this.http.get("http://localhost:3000/api/productos/")
  }
  getProducto(id){
    return this.http.get("http://localhost:3000/api/productos/"+id)
  }
}
