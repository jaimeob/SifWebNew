import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers  } from '@angular/http';
import { HttpClient , HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { Observable, throwError} from 'rxjs';
import { UsuarioService } from '../../../services/admin/usuario/usuario.service';
import { Router,ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: []
})
export class PrincipalComponent implements OnInit {
  public empresasArray: Array<Request>;

  constructor(
    private http:Http,
     private _httpClient: HttpClient,
     private _empresasService:UsuarioService,
     private _router: Router
  ) { }

  ngOnInit() {
    this.getEmpresas()
  }

  getEmpresas() {
    let token = localStorage.getItem("token");
    let UsuarioId = JSON.parse(localStorage.getItem('UsuarioId'));
    this._empresasService.obtenerEmpresas(UsuarioId,token).subscribe (data =>{
      this.empresasArray = data.data;
       console.log(this.empresasArray,"las empresas")
     })

  }

}
