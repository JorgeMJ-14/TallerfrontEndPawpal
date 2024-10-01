import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudModel } from '../shared/solicitud.model';
import { SolicitudService } from '../shared/solicitud.service';

@Component({
  selector: 'app-editar-solicitud',
  templateUrl: './editar-solicitud.component.html',
  styleUrls: ['./editar-solicitud.component.css']
})
export class EditarSolicitudComponent implements OnInit {
  idSolicitud: string = ''; // Cambiar a string para obtener el id de la ruta
  solicitud: SolicitudModel = new SolicitudModel(0, '', 'Pendiente', '', ''); // Asigna valores por defecto

  constructor(
    private solicitudService: SolicitudService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.idSolicitud = this.route.snapshot.params['idSolicitud'];
    if (this.idSolicitud) {
      const id = Number(this.idSolicitud); 
      this.solicitudService.buscarSolicitudId(id).subscribe({
        next: (data) => {
          this.solicitud = data;
        },
        error: (err) => {
          console.error('Error al obtener solicitudes:', err);
        }
      });
    }
  }

  onSubmit() {
    if (this.solicitud.id) {
      this.solicitudService.actualizarSolicitud(this.solicitud.id, this.solicitud).subscribe({
        next: () => {
          this.router.navigate(['/solicitudes']); 
        },
        error: (err) => {
          console.error('Error updating request:', err);
        }
      });
    } else {
      this.solicitudService.crearSolicitud(this.solicitud).subscribe({
        next: () => {
          this.router.navigate(['/solicitudes']); 
        },
        error: (err) => {
          console.error('Error al actualizar la solicitud:', err);
        }
      });
    }
  }
}
