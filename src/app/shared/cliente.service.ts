import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteModel } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  BASE_URL = 'http://localhost:4000'; // URL base de la API

  constructor(private http: HttpClient) {}

  // Obtener todos los clientes
  obtenerClientes() {
    return this.http.get<ClienteModel[]>(`${this.BASE_URL}/cliente/buscarClientes`);
  }

  // Buscar cliente por ID
  obtenerCliente(idCliente: string) {
    return this.http.get<ClienteModel>(`${this.BASE_URL}/cliente/buscarClienteId/${idCliente}`);
  }

  // Agregar nuevo cliente
  agregarCliente(cliente: ClienteModel) {
    return this.http.post<ClienteModel>(`${this.BASE_URL}/cliente/crearCliente`, cliente);
  }

  // Actualizar cliente existente
  actualizarCliente(cliente: ClienteModel) {
    return this.http.put<ClienteModel>(`${this.BASE_URL}/cliente/actualizarCliente/${cliente.id}`, cliente);
  }

  // Eliminar cliente
  borrarCliente(idCliente: string) {
    return this.http.delete<void>(`${this.BASE_URL}/cliente/eliminarCliente/${idCliente}`);
  }
}
