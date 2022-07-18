import { Component, OnInit } from '@angular/core';

class Pelicula{
  constructor(
    public id:number,
    public nombre: string,
    public genero: string,
    public estado: boolean,
    public director?: string
  ){}
}

@Component({
  selector: 'app-validar-driven',
  templateUrl: './validar-driven.component.html',
  styleUrls: ['./validar-driven.component.css']
})
export class ValidarDrivenComponent implements OnInit {

  generos = ['Terror', 'Suspenso', 'Aventura', 'Comedia', 'Drama'];
  modelo = new Pelicula( 1, 'Terminator', this.generos[2], false);

  constructor() { }

  ngOnInit(): void {
  }

  mostrarForm(formulario: any){
    if(formulario.form.status === 'VALID'){
      this.modelo.estado = true;
      console.log(formulario);
      console.log(formulario.value);
    }
  }

  ocultarDetalle(){
    this.modelo.estado = false;
  }

}
