import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';


@Component({
  selector: 'app-c-regist',
  templateUrl: './c-regist.component.html',
  styleUrls: ['./c-regist.component.css']
})
export class CRegistComponent {

  categoria = {
    nombre: '',
    descripcion: ''
  };
  constructor(private categoriaService: CategoriaService,
    public router:Router) { }

  ngOnInit() {}

  // metodo para registrar una categoria
  registrarCategoria() {
    this.categoriaService.createCategoria(this.categoria).then((data: any) => {
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  }

  cancelar() {
    this.router.navigate(['/productos']);
  }

}
