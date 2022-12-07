import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'https://deploy-pfar-production.up.railway.app/usuario'
  constructor(
    private http: HttpClient
  ) { }

  // Metodo para consultar todos los usuarios
  getUsuarios() {
    return this.http.get(`${this.url}`).toPromise();
  }

  // Metodo para consultar el usuario por el mail
  getUsuario(mail: string) {
    return this.http.get(`${this.url}/mail/${mail}`).toPromise();
  }

  // Metodo para crear un usuario
  createUsuario(usuario: any) {
    return this.http.post(`${this.url}`, usuario).toPromise();
  }

  // Metodo para actualizar un usuario por el mail
  updateUsuario(mail: string, usuario: any) {
    return this.http.put(`${this.url}/mail/${mail}`, usuario).toPromise();
  }

  // Metodo para eliminar un usuario por el id
  deleteUsuario(id: string) {
    return this.http.delete(`${this.url}/${id}`).toPromise();
  }

}
