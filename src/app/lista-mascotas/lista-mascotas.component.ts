import { Component, OnInit } from '@angular/core';
import { MascotaModel } from '../shared/mascota.model';
import { MascotaService } from '../shared/mascota.service';


@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrl: './lista-mascotas.component.css'
})
export class ListaMascotasComponent implements OnInit {
  mascotas: MascotaModel[] = [];  
  mostrarEstado: { [key: string]: boolean } = {};  

  constructor(private mascotaService: MascotaService) {}

  ngOnInit() {
    this.mascotaService.obtenerMascotas().subscribe(mascotas => {
      this.mascotas = mascotas;

      // Inicializamos 'mostrar' como false para cada mascota basada en su ID
      this.mascotas.forEach(mascota => {
        this.mostrarEstado[mascota.id] = false;
      });
    });
  }

  // Método para alternar el estado 'mostrar' basado en el ID de la mascota
  toggleMostrar(idMascota: string) {
    this.mostrarEstado[idMascota] = !this.mostrarEstado[idMascota];
  }

  borrarMascota(idMascota: string) {
    this.mascotaService.borrarMascota(idMascota).subscribe({
      next: () => {
        console.log(`Registro Eliminado`);
        this.ngOnInit();
      },
      error: err => {
        console.log(`Error al eliminar Registro ${err}`);
      }
    });
  }
}

