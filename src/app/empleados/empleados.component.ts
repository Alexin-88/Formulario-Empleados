import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {

  @Input() listaEmpleados:Empleado; 
  @Input() indice:number;

  listaCaracteristicas = new Array();

  addCaracteristica(caracteristica: string) {
    this.listaCaracteristicas.push(caracteristica);
  }

  eliminarEmpleado(){
    
  }
}
