import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { MascotaService } from './shared/mascota.service';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ListaSolicitudComponent } from './lista-solicitud/lista-solicitud.component';
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';



@NgModule({

  declarations: [

    AppComponent,
      ListaMascotasComponent,
      EditarMascotasComponent,
      ListaClienteComponent,
      EditarClienteComponent,
      ListaSolicitudComponent,
      EditarSolicitudComponent,
      

  ],

  imports: [

    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    

  ],

  providers: [
    MascotaService,
    provideHttpClient(),
    provideClientHydration(),

  ],

  bootstrap: [

    AppComponent,

  ],

})

export class AppModule {

}