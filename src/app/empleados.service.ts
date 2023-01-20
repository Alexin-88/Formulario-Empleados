import { Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { Empleado } from './empleado.model';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor( private dataServices:DataServices) { }

  empleados:Empleado[]=[];


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  setEmpleados(misEmpleados:Empleado[]){
    this.empleados=misEmpleados;
  }

  cargarEmpleado(){ 

    return this.dataServices.cargarEmpleados();
  }

  agregarEmpleadoServicio(empleado:Empleado){

    this.empleados.push(empleado);

    this.dataServices.guardarEmpleados(this.empleados);

  }

  encontrarEmpleado(index:number){
    return this.empleados[index];
  }
  
  actualizarEmpleadoServicio(empleado:Empleado, index:number){
    let empleadoModificado=this.empleados[index];

    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;

    this.dataServices.actualizarEmpleadoDataServices(index,empleadoModificado);
    
    
  }

  eliminarEmpleadoServicio(index:number){

    this.empleados.splice(index,1);

    this.dataServices.eliminarEmpleadoDataServices(index);//A VECES TAMBIEN PASA LO DE QUE ELIMINA UN ELEMENTO Y POR EJEMPLO PASA DEL 1 AL 3
                                                          //SIN RESTABLECER EL ARRAY DE NUEVO. A VECES LO HACE BIEN OTRAS NO. SEGÚN LE DÉ

    this.dataServices.guardarEmpleados(this.empleados);
   
  }
}
