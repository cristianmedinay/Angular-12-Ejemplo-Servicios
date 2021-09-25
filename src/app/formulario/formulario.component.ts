import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personas } from '../persona.model';
import { PersonaServicio } from '../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  //@Output() persona = new EventEmitter<Personas>();
  title = '';
  nombre:string='';
  apellido:string='';


  constructor(private personaServicio:PersonaServicio) { 


  }

  ngOnInit(): void {
  }
  
  enviar(){
    let perso = new Personas(this.nombre,this.apellido);
    this.personaServicio.agregarPersona(perso);
  }


}
