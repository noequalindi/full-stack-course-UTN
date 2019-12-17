import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto;
  constructor(public route:ActivatedRoute,public prd:ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe(data=>{
      //console.log(data)
      this.prd.getProducto(data["id"]).subscribe(datos=>{
        console.log(datos)
        this.producto=datos["data"];
      })
    })
  }

}
