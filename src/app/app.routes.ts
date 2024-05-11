import { Routes } from '@angular/router';
import { Ejercico1Component } from './ejercico1/ejercico1.component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from './ejercicio4/ejercicio4.component';

export const routes: Routes = [
    {path:"ejercicio1",component:Ejercico1Component},
    {path:"ejercicio2",component:Ejercicio2Component},
    {path:"ejercicio3",component:Ejercicio3Component},
    {path:"ejercicio4",component:Ejercicio4Component}

];
