import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private mislibros: Libro[];
  public miLibro: Libro;
  public miLibro2: Libro;
  public miLibro3: Libro;
  public miLibro4: Libro;
  public miLibro5: Libro;
  public miLibro6: Libro;

  constructor() { 
    this.miLibro = new Libro(1,1,"titulo1 del libro 1", "Humor","Pedrito", 200, "http://www.comunidadbaratz.com/wp-content/uploads/Instrucciones-a-tener-en-cuenta-sobre-como-se-abre-un-libro-nuevo.jpg" );
    this.miLibro2 = new Libro(2,2,"titulo1 del libro 2", "Terror","Pedrito", 300, "http://www.comunidadbaratz.com/wp-content/uploads/Instrucciones-a-tener-en-cuenta-sobre-como-se-abre-un-libro-nuevo.jpg" );
    this.miLibro3 = new Libro(3,3,"titulo1 del libro 3", "Accion","Pedrito", 400, "http://www.comunidadbaratz.com/wp-content/uploads/Instrucciones-a-tener-en-cuenta-sobre-como-se-abre-un-libro-nuevo.jpg" );
    this.miLibro4 = new Libro(4,4,"titulo1 del libro 4", "Aventura","Pedrito", 500, "http://www.comunidadbaratz.com/wp-content/uploads/Instrucciones-a-tener-en-cuenta-sobre-como-se-abre-un-libro-nuevo.jpg" );
    this.miLibro5 = new Libro(5,5,"titulo1 del libro 5", "Romantico","Pedrito", 600, "http://www.comunidadbaratz.com/wp-content/uploads/Instrucciones-a-tener-en-cuenta-sobre-como-se-abre-un-libro-nuevo.jpg" );
    this.miLibro6 = new Libro(6,6,"titulo1 del libro 6", "Ciencia","Pedrito", 700, "http://www.comunidadbaratz.com/wp-content/uploads/Instrucciones-a-tener-en-cuenta-sobre-como-se-abre-un-libro-nuevo.jpg" );

    this.mislibros = [this.miLibro,this.miLibro2,this.miLibro3,this.miLibro4,this.miLibro5,this.miLibro6];
  }

  
  public getAll():Libro[]{
    return this.mislibros;
  }

  public getOne(id_libro:number):Libro{
    let result: Libro = this.mislibros.find((libro)=>{
      return libro.id_libro == id_libro
    });

    return (result) ? result : null;  
  }

  public add(libro:Libro):void{
    this.mislibros.push(libro);
  }

  public edit(libro:Libro):boolean{
    let editado:boolean = false;
    let posicion:number = this.mislibros.findIndex((libroIt)=>{
      return libroIt.id_libro == libro.id_libro 
    });

    if (posicion != -1){
      this.mislibros[posicion] = libro;
      editado = true;
    }
  
    return editado;
  }

  public delete(id_libro:number):boolean{
    let encontrado:boolean = false;
    let posicion:number = this.mislibros.findIndex((libroIt)=>{
      return libroIt.id_libro == id_libro;
    })


    if (posicion != -1){
      this.mislibros.splice(posicion,1);
      return true;
    }else{
      return false;
    }
  }

}
