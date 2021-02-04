import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  estado:string = '';
  muestra:boolean = false;
  constructor() { 
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  listado: string[] = ['Spiderman', 'CapitanAmerica', 'Batman', 'Hulk', 'Iron man'];
  borrarHeroe(){
    console.log('Esta borrando');
    this.listado.splice(1, 1);
    
  }

  borrar(){
    this.estado = this.listado.shift() || '';
    if(this.estado == ''){
      this.muestra= false;
    }else{
      this.muestra = true;
    }
  }
}
