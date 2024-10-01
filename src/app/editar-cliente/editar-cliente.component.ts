import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../shared/cliente.service'; 
import { ClienteModel } from '../shared/cliente.model'; 

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  idCliente = '';
  cliente: ClienteModel = new ClienteModel('', '', '', ''); 
  

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.idCliente = this.route.snapshot.params['idCliente'];
    if (this.idCliente) {
      this.clienteService.obtenerCliente(this.idCliente).subscribe({
        next: (data) => {
          this.cliente = data;
        },
        error: (err) => {
          console.error('Error al obtener el cliente:', err);
        }
      });
    }
  }

  onSubmit() {
    if (this.cliente.id) {
      this.clienteService.actualizarCliente(this.cliente).subscribe({
        next: () => {
          this.router.navigate(['/clientes']); 
        },
        error: (err) => {
          console.error('Error al actualizar el cliente:', err);
        }
      });
    } else {
      // Add a new client
      this.clienteService.agregarCliente(this.cliente).subscribe({
        next: () => {
          this.router.navigate(['/clientes']); 
        },
        error: (err) => {
          console.error('Error al agregar el cliente:', err);
        }
      });
    }
  }
}
