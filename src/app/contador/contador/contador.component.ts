import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `<h1>{{titulo}}</h1>

    <button (click)="sumar()">+1</button>
    <button (click)="acumular(1)">+1</button>
    <span>{{numero}}</span>
    <button (click)="restar()">-1</button>
    <button (click)="acumular(-1)">-1</button>
    
    
    
    <h3>La base es: <strong>{{base}}</strong></h3>
    
    
    <button (click)="tarea(base)">{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="tarea(-base)">{{-base}}</button>`

})
export class ContadorComponent{

    titulo:string = 'Contador App';

    numero:number = 10;
    base: number =5;
  
    sumar(){
      this.numero += +1;
    }
  
    restar(){
      this.numero -= -1
    }
  
    acumular(valor:number){
      this.numero += valor
    }
    tarea(valor:number){
      this.numero += valor;
    }

}