import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { CarritoService } from 'src/app/services/carrito.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  productos: any = [];
  id = this.activatedRoute.snapshot.paramMap.get('id');
  constructor(
    public auth: AuthService,
    public router: Router,
    public productoService: ProductoService,
    private carritoService: CarritoService,
    private activatedRoute: ActivatedRoute
    ) { 
    }

    // 


    // metodo para obtener todos los productos del carrito
    getCarrito() {
      this.carritoService.getCarrito(this.id).then((data: any) => {
        this.productos = data;
        console.log(this.productos);
      }).catch((error) => {
        console.log(error);
      });
    }

    // metodo para consultar la informacion de los productos del carrito y ponerlos en el array productos


    

}
