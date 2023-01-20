import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private empleadoServicio:EmpleadosService){}

  ngOnInit(): void {
    

    this.empleadoServicio.cargarEmpleado().subscribe(misEmpleados=>{

      console.log(misEmpleados);

      this.empleados=Object.values(misEmpleados);

      this.empleadoServicio.setEmpleados(this.empleados);
    });
  }

  title = 'Listado de empleados';

  empleados:Empleado[]=[];


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregarEmpleado(){

    let empleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleadoServicio.agregarEmpleadoServicio(empleado);
  }
}
