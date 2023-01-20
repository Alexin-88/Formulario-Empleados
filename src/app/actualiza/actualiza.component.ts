import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataServices } from '../data.services';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualiza',
  templateUrl: './actualiza.component.html',
  styleUrls: ['./actualiza.component.css']
})
export class ActualizaComponent implements OnInit{

  constructor(private route:ActivatedRoute, private empleadoServicio:EmpleadosService, private router:Router, private dataServices:DataServices) {
    
  }
  ngOnInit(): void {
    
    this.indice= this.route.snapshot.params['id'];
    let empleadoSeleccionado:Empleado=this.empleadoServicio.encontrarEmpleado(this.indice);

    this.cuadroNombre=empleadoSeleccionado.nombre;
    this.cuadroApellido=empleadoSeleccionado.apellido;
    this.cuadroCargo=empleadoSeleccionado.cargo;
    this.cuadroSalario=empleadoSeleccionado.salario;

    this.accion=this.route.snapshot.queryParams['accion'];
    if(this.accion==1){
      this.eliminaEmpleado()
    }
    
  }

  actualizaEmpleado(){
    let empleadoActualizado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    this.empleadoServicio.actualizarEmpleadoServicio(empleadoActualizado, this.indice);

    this.dataServices.cargarEmpleados().subscribe();//PUSE AQUI ESTO PQ SINO YA SIEMPRE TENÍA QUE RECARGAR LA PAGINA PARA Q MOSTRASE LA ACTUALIZACION
                                                    //Y ASI A VECES FUNCIONA A LA PRIMERA Y OT
        
    this.router.navigate(['']);
    
  }

  eliminaEmpleado(){
    this.empleadoServicio.eliminarEmpleadoServicio(this.indice);
    

    this.router.navigate(['']);
  }

  comprobarAccion(){
    if(this.accion==2){
      return true;
    }else 
    return false;
  }


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  indice:number;
  accion:number;
}
