import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarPostComponent } from './atualizar-post/atualizar-post.component';

import { CriarPostComponent } from './criar-post/criar-post.component';
import { DeletarPostComponent } from './deletar-post/deletar-post.component';
import { HomeComponent } from './home/home.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
