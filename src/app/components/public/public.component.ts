import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  productos: any = [];
  constructor(private productoService:ProductoService, public router: Router) { }

  ngOnInit() {
    this.getProductos();
  }

  // Método para obtener todos los productos
  getProductos() {
    this.productoService.getProductos().then((data: any) => {
      this.productos = data;
      console.log(this.productos);
    }).catch((error) => {
      console.log(error);
    }
    );

}
// Método para ver el detalle de un producto

}
