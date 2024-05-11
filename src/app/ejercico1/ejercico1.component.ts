import { ResourceLoader } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercico1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercico1.component.html',
  styleUrl: './ejercico1.component.scss'
})
export class Ejercico1Component {
alc1 ={
  indicador1:'C',
  vehiculo1:"Camion",
  tasa1:0,
  diagnostico1:""
};
alc2 ={
  indicador2:'A',
  vehiculo2:"Automovil",
  tasa2:0,
  diagnostico2:""
};
alc3 ={
  indicador3:'T',
  vehiculo3:"Turismo",
  tasa3:0,
  diagnostico3:""
};
alc4 ={
  indicador4:'M',
  vehiculo4:"Motocicleta",
  tasa4:0,
  diagnostico4:""
};
mostrarResultado = true;
intervenidos: Intervenido =[];

calcularAlc1(){
  this.alc1.diagnostico1=this.diagnosticoAlc1(this.alc1.tasa1);
  this.intervenidos.push({indicador:this.alc1.indicador1,
    tasaalc:this.alc1.tasa1,
    diagnostico:this.alc1.diagnostico1
  })
}
diagnosticoAlc1(tasa1 : number):string{
 let resultado1="";
if(tasa1< 0.3){
  resultado1="Todo ok";
}else{
  resultado1="Exceso de alcohol";
}
  return resultado1;
}

calcularAlc2(){
  this.alc2.diagnostico2=this.diagnosticoAlc2(this.alc2.tasa2);
  this.intervenidos.push({indicador:this.alc2.indicador2,
    tasaalc:this.alc2.tasa2,
    diagnostico:this.alc2.diagnostico2
  })
}
diagnosticoAlc2(tasa2 : number):string{
  let resultado2="";
 if(tasa2< 0.3){
   resultado2="Todo ok";
 }else{
   resultado2="Exceso de alcohol";
 }
   return resultado2;
 }

 calcularAlc3(){
  this.alc3.diagnostico3=this.diagnosticoAlc3(this.alc3.tasa3);
  this.intervenidos.push({indicador:this.alc3.indicador3,
    tasaalc:this.alc3.tasa3,
    diagnostico:this.alc3.diagnostico3
  })
}
diagnosticoAlc3(tasa3 : number):string{
  let resultado3="";
 if(tasa3< 0.5){
   resultado3="Todo ok";
 }else{
   resultado3="Exceso de alcohol";
 }
   return resultado3;
 }

 calcularAlc4(){
  this.alc4.diagnostico4=this.diagnosticoAlc4(this.alc4.tasa4);
  this.intervenidos.push({indicador:this.alc4.indicador4,
    tasaalc:this.alc4.tasa4,
    diagnostico:this.alc4.diagnostico4
  })
}
diagnosticoAlc4(tasa4 : number):string{
  let resultado4="";
 if(tasa4< 0.3){
   resultado4="Todo ok";
 }else{
   resultado4="Exceso de alcohol";
 }
   return resultado4;
 }
}
type Intervenido = Array <{indicador: string, tasaalc:number, diagnostico:string}>
