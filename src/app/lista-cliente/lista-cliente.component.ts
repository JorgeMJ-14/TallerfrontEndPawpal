import { Component, OnInit } from '@angular/core';
import { ClienteModel } from '../shared/cliente.model';
import { ClienteService } from '../shared/cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {
  clientes: ClienteModel[] = []; // Cambia a un array de Clientes
  mostrarEstado: { [key: string]: boolean } = {}; // Clave: ID del cliente, Valor: estado 'mostrar'

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.obtenerClientes();
  }

  // Método para obtener todos los clientes
  obtenerClientes(): void {
    this.clienteService.obtenerClientes().subscribe(clientes => {
      this.clientes = clientes;

      // Inicializamos 'mostrar' como false para cada cliente basado en su ID
      this.clientes.forEach(cliente => {
        this.mostrarEstado[cliente.id] = false;
      });
    }, error => {
      console.error('Error al obtener clientes', error);
    });
  }

  // Método para alternar el estado 'mostrar' basado en el ID del cliente
  toggleMostrar(idCliente: string): void {
    this.mostrarEstado[idCliente] = !this.mostrarEstado[idCliente];
  }

  // Método para borrar un cliente
  borrarCliente(idCliente: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      this.clienteService.borrarCliente(idCliente).subscribe({
        next: () => {
          console.log(`Cliente eliminado`);
          this.obtenerClientes(); // Actualiza la lista después de eliminar
        },
        error: err => {
          console.error(`Error al eliminar cliente: ${err}`);
        }
      });
    }
  }
}
