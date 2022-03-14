import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ServicioService } from 'src/app/shared/servicio.service';

@Component({
  selector: 'app-complibros',
  templateUrl: './complibros.component.html',
  styleUrls: ['./complibros.component.css']
})
export class ComplibrosComponent implements OnInit {
  public libros: Libro[];

  constructor(public ServicioLibros: ServicioService) {

    this.libros = ServicioLibros.getAll();
  }

  ngOnInit(): void {
  }

  enviarLibro(idlibro,idusuario,titulo,tipo,autor,precio,ruta){
    if(idlibro.value !="" && titulo.value != ""){
      this.libros.push(new Libro(idlibro.value,idusuario.value,titulo.value,tipo.value,autor.value,precio.value,ruta.value));
    }else{
      console.log("No se ha especificado ningún libro.");
      
    }
    
  }

  // encontrar(element,index,array){
  // };

  public buscar(idlibro){
   
    //si el campo idLibro está vacio mostramos todos.
    if (idlibro.value == ""){
      console.log("Entra aqui");
      this.libros = this.ServicioLibros.getAll();
    }else{
      console.log("Entra en motrar 1");
      console.log(this.ServicioLibros.getOne(idlibro.value));
      this.libros = [];
      this.libros.push(this.ServicioLibros.getOne(idlibro.value));
      
    }
    
  }

  public eliminarLibro(idlibro){
   this.ServicioLibros.delete(idlibro);
    
  }


  editarLibro(idlibro,idusuario,titulo,tipo,autor,precio,ruta){

    let posicion = -1;
    
    for (let i=0; i < this.libros.length; i++){
      if ( this.libros[i].id_libro == idlibro.value)
        posicion = i;
    }

    if (posicion !=-1){
      if(idusuario.value != "")
        this.libros[posicion].id_usuario = idusuario.value;
      if(titulo.value != "")
        this.libros[posicion].titulo = titulo.value;
      if(tipo.value != "")
        this.libros[posicion].tipoLibro = tipo.value;
      if(autor.value != "")
        this.libros[posicion].autor = autor.value;
      if(precio.value!="")
        this.libros[posicion].precio = precio.value;
      if(ruta.value != "")
        this.libros[posicion].photo = ruta.value;
    }else{
      console.log("No se ha encontrado ningún libro con ese ID.");
      
    }

    
  }

  public buscar2(id_libro):void{

        // si el campo idLibro está vacio mostramos todos.
    if (id_libro == ""){
      // console.log("Entra aqui");
      this.libros = this.ServicioLibros.getAll();
    }else{
      // console.log("Entra en motrar 1");
      console.log(this.ServicioLibros.getOne(id_libro));
      this.libros = [];
      this.libros.push(this.ServicioLibros.getOne(id_libro));
      
    }
      
  }

  public eliminarLibro2(idlibro){
    let posicion = -1;

    this.ServicioLibros.delete(idlibro)
        this.libros.splice(posicion,1);
      }
    }

