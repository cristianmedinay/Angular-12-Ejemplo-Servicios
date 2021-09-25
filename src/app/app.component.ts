import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Personas } from './persona.model';
import { PersonaServicio } from './persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  

  constructor(){


  }

  ngOnInit(): void {
  }  


  
 // @ViewChild('nombre') nombre:ElementRef;
 // @ViewChild('apellido') apellido:ElementRef;

 /*mostrarName($event:Event){
  this.title=(<HTMLInputElement>$event.target).value;
 }
 mostrarLastName($event:Event){
  this.title=(<HTMLInputElement>$event.target).value;
 }*/
  

}
