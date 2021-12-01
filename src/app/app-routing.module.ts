import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CriarPostComponent } from './components/post/criar-post/criar-post.component';
import { HomeComponent } from './components/post/home/home.component';
import { LoginComponent } from './components/pessoa/login-registro/login-registro.component';
import { DeletarPostComponent } from './components/post/deletar-post/deletar-post.component';
import { AtualizarPostComponent } from './components/post/atualizar-post/atualizar-post.component';
import { PrecosComponent } from './components/template/precos/precos.component';

const routes: Routes = [
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

  {
    path: 'loginRegistro',
    component: LoginComponent
  },

  {
    path: 'precos',
    component: PrecosComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
