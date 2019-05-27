
import { Routes } from '@angular/router';  
import { Comp1Component } from  './comp-1/comp-1.component';
import { Comp2Component } from './comp-2/comp-2.component'; 


//Déclarer un tableau de route à partir de la base L'URL de base 
export const ROUTES:Routes = [
    {path: 'comp1', component: Comp1Component}, //Route vers le component 1
    {path: 'comp2', component: Comp2Component}, //Route vers le component 2
    {path: '', redirectTo: 'comp1', pathMatch:'full'},
    {path: 'comp1/:param', component: Comp1Component},
    {path: 'comp2/:token', component: Comp2Component },
    {path: 'comp2/:token1/:token2', component:Comp2Component}
  ]; 