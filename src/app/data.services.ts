import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){}

    guardarEmpleados(empleados:Empleado[]){

        this.httpClient.put('https://empleados-bc8d9-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleados).subscribe();
    }

    cargarEmpleados(){
        return this.httpClient.get('https://empleados-bc8d9-default-rtdb.europe-west1.firebasedatabase.app/datos.json');
    }

    actualizarEmpleadoDataServices(index:number, empleado:Empleado){

        let url='https://empleados-bc8d9-default-rtdb.europe-west1.firebasedatabase.app/datos/' + index + '.json';
        this.httpClient.put(url, empleado).subscribe();
    }

    eliminarEmpleadoDataServices(index:number){
        let url='https://empleados-bc8d9-default-rtdb.europe-west1.firebasedatabase.app/datos/' + index + '.json';

        this.httpClient.delete(url).subscribe();
    }


}