import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { CategoriaService } from 'src/app/services/categoria.service';


@Component({
  selector: 'app-p-regist',
  templateUrl: './p-regist.component.html',
  styleUrls: ['./p-regist.component.css']
})
export class PRegistComponent {

  categorias: any = [];

  producto = {
    nombre: '',
    descripcion: '',
    precioUni: '',
    disponible: false,
    picture: 'https://htmldemo.net/moren/moren/assets/img/shop/'
  };

  constructor( private productoService: ProductoService,
                private categoriaService: CategoriaService,
    public router:Router) { }
  
    ngOnInit() {
    }

    // metodo para registrar un producto
    registrarProducto() {
      this.productoService.createProducto(this.producto).then((data: any) => {
        console.log(data);
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
