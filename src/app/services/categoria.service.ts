import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }

  // Método para obtener todas las categorias
  getCategorias() {
    return this.http.get('https://deploy-pfar-production.up.railway.app/categoria').toPromise();
  }

  // Método para obtener una categoria por su id
  getCategoria(id: string) {
    return this.http.get(`https://deploy-pfar-production.up.railway.app/categoria/${id}`).toPromise();
  }

  // Método para crear una categoria
  createCategoria(categoria: any) {
    return this.http.post('https://deploy-pfar-production.up.railway.app/categoria', categoria).toPromise();
  }

  // Método para actualizar una categoria
  updateCategoria(id: string, categoria: any) {
    return this.http.put(`https://deploy-pfar-production.up.railway.app/categoria/${id}`, categoria).toPromise();
  }

  // Método para eliminar una categoria
  deleteCategoria(id: string) {
    return this.http.delete(`https://deploy-pfar-production.up.railway.app/categoria/${id}`).toPromise();
  }
  
}
