import { Component, OnInit } from '@angular/core';

class Pelicula{
  constructor(
    public id:number,
    public nombre: string,
    public genero: string,
    public director: string,
    public estado: boolean
  ){}
}

@Component({
  selector: 'app-validar-driven',
  templateUrl: './validar-driven.component.html',
  styleUrls: ['./validar-driven.component.css']
})
export class ValidarDrivenComponent implements OnInit {

  generos = ['Terror', 'Suspenso', 'Aventura', 'Comedia', 'Drama'];
  modelo = new Pelicula( 1, 'Terminator', this.generos[2], 'Stephen Spielberg', false);

  constructor() { }

  ngOnInit(): void {
  }

  mostrarForm(formulario: any){
    console.log(formulario);
    this.modelo.estado = true;
  }

}
