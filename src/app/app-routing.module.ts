import { DashboardComponent } from './pessoa/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CriarPostComponent } from './post/criar-post/criar-post.component';
import { HomeComponent } from './post/home/home.component';
import { LoginComponent } from './pessoa/login-registro/login-registro.component';
import { DeletarPostComponent } from './post/deletar-post/deletar-post.component';
import { AtualizarPostComponent } from './post/atualizar-post/atualizar-post.component';
import { PrecosComponent } from './template/precos/precos.component';

const routes: Routes = [
  // Rotas de post
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'criarPost',
    component: CriarPostComponent
  },
  {
    path: 'atualizarPost/:id',
    component: AtualizarPostComponent
  },
  {
    path: 'deletarPost/:id',
    component: DeletarPostComponent
  },

  // Rotas de pessoa
  {
    path: 'loginRegistro',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },

  // Rotas de template
  {
    path: 'precos',
    component: PrecosComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
