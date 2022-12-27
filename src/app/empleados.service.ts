import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor() { }

  empleados:Empleado[]=[

    new Empleado("Alex", "Fresco", "Presidente", 7500),
    new Empleado("Yanis", "Franco", "Directora", 5500),
    new Empleado("Lara", "Fresco", "Jefa sección", 300),
    new Empleado("Ringo", "Start", "Administrativa", 1500),
  ];


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregarEmpleadoServicio(empleado:Empleado){

    this.empleados.push(empleado);

  }

  encontrarEmpleado(index:number){
    return this.empleados[index];
  }
  
  actualizarEmpleadoServicio(empleado:Empleado, index:number){
    this.empleados[index].nombre=empleado.nombre;
    this.empleados[index].apellido=empleado.apellido;
    this.empleados[index].cargo=empleado.cargo;
    this.empleados[index].salario=empleado.salario;
    
  }

  eliminarEmpleadoServicio(index:number){

    this.empleados.splice(index,1);
  }
}
