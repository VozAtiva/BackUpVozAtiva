import { UsuarioModel } from './../model/UsuarioModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioLogin } from '../model/UsuarioLogin';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient){}

  Logar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('http://localhost:8080/usuarios/logar', usuarioLogin)
  }

  Cadastrar (usuarioModel: UsuarioModel): Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>('http://localhost:8080/usuarios/cadastrar', usuarioModel)
  }
}
