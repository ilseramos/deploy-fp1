import { Injectable } from '@angular/core';
// importar httpclient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  url = 'https://deploy-pfar-production.up.railway.app/carrito'
  constructor(
    private http: HttpClient
  ) { }

  // Metodo para consultar el carrito por el id del usuario
  getCarrito(id: string) {
    return this.http.get(`${this.url}/${id}`).toPromise();
  }
  
}
