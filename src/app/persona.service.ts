import { Personas } from "./persona.model";

export class PersonaServicio{


    persona: Personas[]=[];


    agregarPersona(perso: Personas){
        this.persona.push(perso); //cristian medina
    }

    getPersonas(){
        return this.persona; //cristian medina
    }


}