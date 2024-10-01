import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MascotaModel } from './mascota.model';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  BASE_URL='http://localhost:4000';

  constructor(private http: HttpClient) { 

    //lista completa mascotas
  }
  obtenerMascotas(){
    return this.http.get<MascotaModel[]>(`${this.BASE_URL}/mascotas/buscarM`);
  }

  //buscar mascota por ID
  obtenerMascota(idMascota:string){
    return this.http.get<MascotaModel>(`${this.BASE_URL}/mascotas/buscarIdM/${idMascota}`);
  }

  agregarMascota(mascota:MascotaModel){
    return this.http.post<string>(`${this.BASE_URL}/mascotas/crearM`,mascota);
  }
  actualizarMascota(mascota:MascotaModel){
    return this.http.put<string>(`${this.BASE_URL}/mascotas/actualizarM/${mascota.id}`,mascota);
  }

  borrarMascota(idMascota:string){
    return this.http.delete<string>(`${this.BASE_URL}/mascotas/eliminarM/${idMascota}`);
  }


}
