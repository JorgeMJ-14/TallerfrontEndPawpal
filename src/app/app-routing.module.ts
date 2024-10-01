import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ListaSolicitudComponent } from './lista-solicitud/lista-solicitud.component';
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';


const routes: Routes = [
  { path: 'mascotas', component: ListaMascotasComponent },
  { path: 'mascotas/editar/:idMascota', component: EditarMascotasComponent },
  { path: 'mascotas/agregar', component: EditarMascotasComponent },
  
  // Rutas para Clientes
  { path: 'clientes', component: ListaClienteComponent },
  { path: 'clientes/editar/:idCliente', component: EditarClienteComponent },
  { path: 'clientes/agregar', component: EditarClienteComponent },

   // Rutas para Solicitudes
   { path: 'solicitudes', component: ListaSolicitudComponent },
   { path: 'solicitudes/editar/:idSolicitud', component: EditarSolicitudComponent },
   { path: 'solicitudes/agregar', component: EditarSolicitudComponent },

   
  
  { path: '**', redirectTo: '/mascotas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
