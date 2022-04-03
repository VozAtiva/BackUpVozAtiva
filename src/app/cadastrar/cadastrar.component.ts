import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../model/UsuarioModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  usuarioModel: UsuarioModel = new UsuarioModel;
  confirmarSenha: string;
  tipoUsuario: string;


  constructor(private authService: AuthService, private router: Router){ }

  ngOnInit(){
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value;

  }

  tipUsuario(event: any) {
    this.tipoUsuario = event.target.value;
    }
    

  cadastrarUsuario(){
    this.usuarioModel.tipo = this.tipoUsuario;
    if(this.usuarioModel.senha != this.confirmarSenha){
      alert("Suas senhas precisam ser iguais");
    } 
      else{
        this.authService.Cadastrar(this.usuarioModel).subscribe((resp:UsuarioModel)=>{
          this.usuarioModel = resp
          this.router.navigate(['/logar'])
          alert("Cadastro realizado com sucesso!")
        } );
      }
  }
}
