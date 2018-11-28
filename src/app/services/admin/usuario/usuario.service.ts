import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router,ActivatedRoute, Params } from '@angular/router';
import 'rxjs/Rx';
import { HttpClient , HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { Observable, throwError} from 'rxjs';


@Injectable({
  providedIn: 'root',
  
})
export class UsuarioService {
  usuario:any = {};
  
  Url:string = "http://172.17.10.86:8000";
  loginUrl:string = "http://172.17.10.86:8000/sesion";

  constructor(
    private http:Http,
    private _httpClient: HttpClient,
    ) { }


  getLogin(correo,contrasena){ 
  console.log(correo,contrasena)
    return this.http.post(this.loginUrl,{usuario: correo,contrasena:contrasena}).map(res=>res.json());
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Ha ocurrido un error:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Ocurrio un error inesperado. Favor de intentarlo mas tarde..');
  };

  obtenerEmpresas(idUsuario,token){
    console.log(idUsuario)
    console.log(token)

      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization':  'Bearer ' + token
        })
      };

    return this._httpClient.get<any>(this.Url+'/admin/empresas/'+idUsuario, httpOptions).pipe(
      catchError(this.handleError));

      
  }
}

