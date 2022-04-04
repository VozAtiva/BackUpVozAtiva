import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LogarComponent } from './logar/logar.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';

const routes: Routes = [
  {path:'', redirectTo:'menu', pathMatch:'full'},

  {path:'menu', component: MenuComponent},
  {path:'rodape', component: RodapeComponent},
  {path:'cadastrar', component: CadastrarComponent},
  {path:'logar', component: LogarComponent},
  {path:'sobrenos', component: SobrenosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
