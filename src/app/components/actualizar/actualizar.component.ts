import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent {
  categorias: any = [];
  id: string|any;

  producto = {
    nombre: '',
    descripcion: '',
    precioUni: '',
    disponible: false,
    picture: 'https://htmldemo.net/moren/moren/assets/img/shop/'
  };

  constructor( private productoService: ProductoService,
                private categoriaService: CategoriaService,
    public router:Router,
    private activatedRoute: ActivatedRoute) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
     }
  
    // metodo para obtener un producto
    ngOnInit() {
      this.getCategorias();
      this.productoService.getProducto(this.id).then((data: any) => {
        this.producto = data.producto;
        console.log(this.producto);
      }
      ).catch((error) => {
        console.log(error);
      }
      );
    }

    // metodo para actualizar un producto
    actualizarProducto() {
      this.productoService.updateProducto(this.id, this.producto).then((data: any) => {
        console.log(data);
        this.router.navigate(['/productos']);
      }).catch((error) => {
        console.log(error);
      });
    }

    // metodo para obtener todas las categorias
    getCategorias() {
      this.categoriaService.getCategorias().then((data: any) => {
        this.categorias = data;
        console.log(this.categorias);
      }).catch((error) => {
        console.log(error);
      } );
    }

    cancelar() {
      this.router.navigate(['/productos']);
    }

    
      
  

  }

