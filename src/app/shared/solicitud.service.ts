import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolicitudModel } from './solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  
  BASE_URL='http://localhost:4000/solicitud';

  constructor(private http: HttpClient) { 

    
  }

  // Crear nueva solicitud
  crearSolicitud(solicitud: SolicitudModel): Observable<any> {
    return this.http.post(`${this.BASE_URL}/crearSolicitud`, solicitud); 
  }

  // Obtener todas las solicitudes
  buscarSolicitudes(): Observable<SolicitudModel[]> {
    return this.http.get<SolicitudModel[]>(`${this.BASE_URL}/buscarSolicitudes`); 
  }

  // Obtener solicitud por ID
  buscarSolicitudId(id: number): Observable<SolicitudModel> {
    return this.http.get<SolicitudModel>(`${this.BASE_URL}/buscarSolicitudId/${id}`); 
  }

  // Actualizar una solicitud existente
  actualizarSolicitud(id: number, solicitud: SolicitudModel): Observable<any> {
    return this.http.put(`${this.BASE_URL}/actualizarSolicitud/${id}`, solicitud); 
  }

  // Borrar una solicitud    
  eliminarSolicitud(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/eliminarSolicitud/${id}`); 
  }
}
