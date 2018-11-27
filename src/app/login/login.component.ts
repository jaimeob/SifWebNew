import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/admin/usuario/usuario.service';
import { Router,ActivatedRoute, Params } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']  
})
export class LoginComponent implements OnInit {
  public correo: string;
  public contrasena: string;
  heroe:any = []
  idUsuario:number

  constructor(
    private _loginService:UsuarioService,
    private _router: Router,
    private activatedRoute: ActivatedRoute,
   // private toastr: ToastrService
    )
  {
  }

  ngOnInit() {
      // localStorage.clear();
    /*let token = localStorage.getItem("token");
    let UsuarioId = JSON.parse(localStorage.getItem('UsuarioId'));
    if(token && UsuarioId){
     // this._router.navigate(['/core/principal/',UsuarioId])
    }else{
      this._router.navigate(['/login'])
    }*/
  }
  login() {
    this._loginService.getLogin(this.correo,this.contrasena).subscribe (data =>{
     this.idUsuario = data.data.idUsuario
      console.log(data,"data")
  
      if(data.success == true){
        localStorage.setItem('token',data.data.token)
        localStorage.setItem('UsuarioId',data.data.idUsuario)
        //this._router.navigate(['/core/principal/{this.idUsuario}',])
       //this.toastr.success('Bienvenido'); 

        
      }
    })
    // error=>this.toastr.error('Datos incorrectos'));
   
    
  }

}

