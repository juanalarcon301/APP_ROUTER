import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IesService {


  private universidades = [
    {
     id:'1',
     nombre_ies: 'Uniandes',
     direccion: 'Ibarra',
     direc_web: 'www.uniandes.edu.ec',
     fotografia: 'https://universidadesecuador.org/wp-content/uploads/Logo-UNIANDES-Universidad-Regional-Autonoma-de-los-Andes.png',
     carreras: ['odontologia','derecho']
    }, 
    {
      id:'2',
      nombre_ies: 'UTN',  
      direccion: 'Ibarra',
      direc_web: 'www.uniandes.edu.ec',
      fotografia: 'https://universidadesecuador.org/wp-content/uploads/Logo-UNIANDES-Universidad-Regional-Autonoma-de-los-Andes.png',
      carreras: []
     }
  ]

  constructor() { }

  getUniversidades(){
    return [...this.universidades]
  }

  getUniversidad(id: String) { 
    return {
    ...this.universidades.find(universidad => {
      return universidad.id === id
      })
    }
  }

  addUniversidad(nombre_ies: string, direccion: string, direc_web: string,fotografia: string, carreras: string){
    this.universidades.push({
      nombre_ies,
      direccion,
      direc_web,
      fotografia,
      carreras:[],
      id: this.universidades.length + 1 + "" 
    })
  }

  delUniversidad(Id: string){
    this.universidades = this.universidades.filter(universidad => {
      return universidad.id !== Id
    })
  }
}
