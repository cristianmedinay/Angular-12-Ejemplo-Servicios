import { Component, Input, OnInit } from '@angular/core';
import { Personas } from '../persona.model';
import { PersonaServicio } from '../persona.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  perso: Personas[]=[];
  //@Input() persona:Personas;

  constructor(private personasServicio:PersonaServicio) { }

  ngOnInit(): void {
    this.perso = this.personasServicio.getPersonas();

  }

}
