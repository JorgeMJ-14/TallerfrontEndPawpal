import { Component, OnInit } from '@angular/core';
import { MascotaModel } from '../shared/mascota.model';
import { MascotaService } from '../shared/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-mascotas',
  templateUrl: './editar-mascotas.component.html',
  styleUrls: ['./editar-mascotas.component.css']
})
export class EditarMascotasComponent implements OnInit {
  idMascota = '';
  mascota = new MascotaModel('', '', '');

  constructor(private mascotaService: MascotaService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.idMascota = this.route.snapshot.params['idMascota'];
    console.log(`El idMascota es ${this.idMascota}`);
  
    if (this.idMascota) {
      console.log('La solicitud viene de Editar');
      this.mascotaService.obtenerMascota(this.idMascota).subscribe({
        next: data => {
          this.mascota = data;
        },
        error: err => {
          console.log(`Error ${err}`);
        }
      });
    } else {
      console.log('La solicitud viene de Nueva Mascota');
    }
  }

  onSubmit() {
    console.log("On Submit", this.mascota); 
    if (this.mascota.id) {
      this.mascotaService.actualizarMascota(this.mascota).subscribe({
        next: data => {
          console.log(data);
          this.router.navigate(['/mascotas']);
        },
        error: err => {
          console.log(`Error al actualizar ${err}`);
        }
      });
    } else {
      this.mascotaService.agregarMascota(this.mascota).subscribe({
        next: data => {
          console.log(data);
          this.router.navigate(['/mascotas']);
        },
        error: err => {
          console.log(`Error al Agregar ${err}`);
        }
      });
    }
  }
}  

