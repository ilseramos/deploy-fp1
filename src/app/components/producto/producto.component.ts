import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  id: string|any;
  producto: any;
  constructor(
    private productoService:ProductoService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  // Método para obtener el producto
  ngOnInit() {
    // optenener id de la parametrización de la ruta
    
    this.productoService.getProducto(this.id).then((data: any) => {
      this.producto = data.producto;
      console.log(this.producto);
    }
    ).catch((error) => {
      console.log(error);
    }
    );

  }

  // metodo para eliminar un producto
  eliminarProducto() {
    this.productoService.deleteProducto(this.id).then((data: any) => {
      console.log(data);
      this.router.navigate(['/productos']);
    }).catch((error) => {
      console.log(error);
    });
  }

  // metodo para actualizar un producto
  actualizar() {
    this.router.navigate(['actualizar/', this.id]);
  }
    


}
