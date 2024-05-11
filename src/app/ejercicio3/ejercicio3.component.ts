import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.scss'
})
export class Ejercicio3Component {
  numeroMes:number | null = null;
  nombreMes: string | null = null;

  mostrarMes() {
    if (this.numeroMes !== null && this.numeroMes >= 1 && this.numeroMes <= 12) {
      const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      this.nombreMes = meses[this.numeroMes - 1];
    } else {
      this.nombreMes = null;
    }
  }
}