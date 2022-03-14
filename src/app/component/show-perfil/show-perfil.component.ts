import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-show-perfil',
  templateUrl: './show-perfil.component.html',
  styleUrls: ['./show-perfil.component.css']
})
export class ShowPerfilComponent implements OnInit {

  public miUsuario: Usuario;

  constructor() 
  {
      this.miUsuario = new Usuario(0,
                                   "Juan",
                                   "Abenza Garrido",
                                   "xxxx@gmail.com",
                                   "https://www.movilzona.es/app/uploads-movilzona.es/2019/05/Foto-de-Perfil-en-WhatsApp.jpg",
                                   "aaa");
   }

   enviar(nuevoNombre: string, nuevoApellido:string, nuevoEmail:string){
     this.miUsuario.nombre = nuevoNombre;
     this.miUsuario.apellidos = nuevoApellido;
     this.miUsuario.correo = nuevoEmail;
   }

  ngOnInit(): void {
  }

}
