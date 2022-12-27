import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Routes, RouterModule } from '@angular/router';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';

import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ActualizaComponent } from './actualiza/actualiza.component';
import { EmpleadosService } from './empleados.service';

const appRoutes:Routes=[

  {path:'', component:HomeComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'quienesSomos', component:QuienesSomosComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'actualiza/:id', component:ActualizaComponent},
  {path:'**',component:PaginaErrorComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesSomosComponent,
    ContactoComponent,
    PaginaErrorComponent,
    CaracteristicasEmpleadoComponent,
    EmpleadosComponent,
    ActualizaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
