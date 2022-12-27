import { Component } from '@angular/core';

import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private empleadoServicio:EmpleadosService){}

  title = 'Listado de empleados';

  empleados:Empleado[]=this.empleadoServicio.empleados;


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregarEmpleado(){

    let empleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleadoServicio.agregarEmpleadoServicio(empleado);
    

  }



}
