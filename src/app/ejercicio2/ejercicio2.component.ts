import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.scss'
})
export class Ejercicio2Component {
  elem={
    numero1:0,
    numero2:0,
    resultado:0
  }
  mostrarResultado=false;
calcularElem(){
}


  resultadoElem(numero1:number, numero2:number):string{
    let total="";
    if(numero1==numero2){
      total = 'numero1*numero2';
    }else if(numero1>numero2){
      total='numero1-numero2';
    }else if(numero1<numero2){
      total ='numero1+numero2';
    }
    return total;
  }
}
 