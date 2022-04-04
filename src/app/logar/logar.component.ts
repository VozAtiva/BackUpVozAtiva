import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent implements OnInit {
  
  usuarioLogin: UsuarioLogin = new UsuarioLogin;


  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  logar(){
    this.auth.Logar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.foto = this.usuarioLogin.foto
      environment.id = this.usuarioLogin.id
      alert('Logado com sucesso!')
      
      this.router.navigate(['/menu'])
    }, erro =>{
      if(erro.status == 500 ||erro.status == 401){
        alert("Usuario ou Senha incorretos!")
      }
    })

  }

}
