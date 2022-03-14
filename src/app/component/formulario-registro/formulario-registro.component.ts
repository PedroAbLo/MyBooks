import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { ServicioUsuarioService } from 'src/app/shared/servicio-usuario.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
  
  public usuario:Usuario;

  constructor(private servicioUsuario:ServicioUsuarioService) { }

  ngOnInit(): void {
  }

  public registrarUsuario2(inputNombre,inputApellidos,inputEmail,inputUrl,inputContrasena1,inputContrasena2){
    
    
    if(inputNombre.value !="" && inputApellidos.value != "" && inputContrasena1 != ""){
      if( inputContrasena1.value == inputContrasena2.value){
        let usuario1 = new Usuario(0,inputNombre.value,inputApellidos.value,inputEmail.value,inputUrl.value,inputContrasena1.value);
        // this.servicioUsuario.register(usuario1);
      }else{
        console.log("Error: Contraseña no coincide.");
        
      }
    }else{
      //Sacar un Toast con esto.
      console.log("Los campos Nombre, Apellidos y Contraseña son OBLIGATORIOS");
      
    }
  }

}
