import { Component, OnInit } from '@angular/core';
import { SolicitudModel } from '../shared/solicitud.model';
import { SolicitudService } from '../shared/solicitud.service';
import { ClienteService } from '../shared/cliente.service';
import { MascotaService } from '../shared/mascota.service';
import { MascotaModel } from '../shared/mascota.model'; 
import { ClienteModel } from '../shared/cliente.model'; 

@Component({
  selector: 'app-lista-solicitud',
  templateUrl: './lista-solicitud.component.html',
  styleUrls: ['./lista-solicitud.component.css']
})
export class ListaSolicitudComponent implements OnInit {
  solicitudes: SolicitudModel[] = [];
  clientes: ClienteModel[] = []; // Cambia a ClienteModel
  mascotas: MascotaModel[] = []; // Cambia a MascotaModel

  constructor(
    private solicitudService: SolicitudService,
    private clienteService: ClienteService,
    private mascotaService: MascotaService
  ) {}

  ngOnInit(): void {
    this.obtenerSolicitudes();
    this.obtenerClientes();
    this.obtenerMascotas();
  }

  obtenerSolicitudes(): void {
    this.solicitudService.buscarSolicitudes().subscribe(solicitudes => {
      this.solicitudes = solicitudes;
      this.asignarNombres(); // Asigna nombres después de obtener solicitudes
    }, error => {
      console.error('Error al obtener solicitudes', error);
    });
  }

  obtenerClientes(): void {
    this.clienteService.obtenerClientes().subscribe(clientes => { // Cambia a obtenerClientes()
      console.log('Clientes obtenidos:', clientes);
      this.clientes = clientes;
      this.asignarNombres(); // Asigna nombres si los clientes están disponibles
    }, error => {
      console.error('Error al obtener clientes', error);
    });
  }

  obtenerMascotas(): void {
    this.mascotaService.obtenerMascotas().subscribe(mascotas => {
      console.log('Mascotas obtenidas:', mascotas);
      this.mascotas = mascotas;
      this.asignarNombres(); // Asigna nombres si las mascotas están disponibles
    }, error => {
      console.error('Error al obtener mascotas', error);
    });
  }

  asignarNombres() {
    this.solicitudes.forEach(solicitud => {
      const cliente = this.clientes.find(c => c.id === solicitud.clienteId);
      const mascota = this.mascotas.find(m => m.id === solicitud.mascotaId);
      solicitud.clienteNombre = cliente ? cliente.nombre : 'Sin cliente';
      solicitud.mascotaNombre = mascota ? mascota.nombre : 'Sin mascota';
    });
  }

  borrarSolicitud(idSolicitud: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta solicitud?')) {
      this.solicitudService.eliminarSolicitud(idSolicitud).subscribe({
        next: () => {
          console.log(`Solicitud eliminada`);
          this.obtenerSolicitudes(); // Actualiza la lista después de eliminar
        },
        error: err => {
          console.error(`Error al eliminar solicitud: ${err}`);
        }
      });
    }
}
}