import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers  } from '@angular/http';
import { HttpClient , HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { Observable, throwError} from 'rxjs';
import { UsuarioService } from '../../services/admin/usuario/usuario.service';
import { Router,ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public empresasArray: Array<Request>;


  constructor
  (
    private http:Http,
     private _httpClient: HttpClient,
     private _empresasService:UsuarioService,
     private _router: Router,
     
     
  ) { }

  ngOnInit() {
    this.getEmpresas()
  }

  getEmpresas() {
    let token = localStorage.getItem("token");
    //let UsuarioId = JSON.parse(localStorage.getItem('UsuarioId'));
    let UsuarioId = 1
    this._empresasService.obtenerEmpresas(UsuarioId,token).subscribe (data =>{
      this.empresasArray = data.data;
       console.log(this.empresasArray,"las empresas")
     })
     //error=>this.toastr.error('No se han encontrado los datos'));

  }

  salir() {
    console.log("Salir")
    localStorage.clear();
    this._router.navigate(['/login'])
  }


}
