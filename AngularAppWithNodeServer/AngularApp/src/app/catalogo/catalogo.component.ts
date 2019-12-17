import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  productos = [];
  constructor(private prd:ProductosService) { 
  }

  ngOnInit() {
    this.prd.getProductos().subscribe(data => {
      console.log(data)
      for( var i=0; i<Object.keys(data).length; i++) {
        let key = Object.keys(data)[i];
            let producto = data[key];
            producto.id = key;
            this.productos = [...this.productos, producto];
            console.log(this.productos)
      }
    
    })

  }

}
