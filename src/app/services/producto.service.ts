import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'https://deploy-pfar-production.up.railway.app/producto';
  constructor(private http: HttpClient) { }

  // Método para obtener todos los productos
  getProductos() {
    return this.http.get(this.url).toPromise();
  }

  // Método para obtener un producto por su id
  getProducto(id: string) {
    return this.http.get(`${this.url}/${id}`).toPromise();
  }

  // Método para crear un producto
  createProducto(producto: any) {
    return this.http.post(this.url, producto).toPromise();
  }

  // Método para actualizar un producto
  updateProducto(id: string, producto: any) {
    return this.http.put(`${this.url}/${id}`, producto).toPromise();
  }

  // Método para eliminar un producto
  deleteProducto(id: string) {
    return this.http.delete(`${this.url}/${id}`).toPromise();
  }

  
}
