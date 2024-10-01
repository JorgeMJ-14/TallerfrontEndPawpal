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
      const id = Number(this.idSolicitud); // Convertir a number
      this.solicitudService.buscarSolicitudId(id).subscribe({
        next: (data) => {
          this.solicitud = data;
        },
        error: (err) => {
          console.error('Error fetching solicitud:', err);
        }
      });
    }
  }

  onSubmit() {
    if (this.solicitud.id) {
      // Update existing request
      this.solicitudService.actualizarSolicitud(this.solicitud.id, this.solicitud).subscribe({
        next: () => {
          this.router.navigate(['/solicitudes']); // Navigate back to the list of requests
        },
        error: (err) => {
          console.error('Error updating request:', err);
        }
      });
    } else {
      // Add a new request (opcional)
      this.solicitudService.crearSolicitud(this.solicitud).subscribe({
        next: () => {
          this.router.navigate(['/solicitudes']); // Navigate back to the list of requests
        },
        error: (err) => {
          console.error('Error adding request:', err);
        }
      });
    }
  }
}
