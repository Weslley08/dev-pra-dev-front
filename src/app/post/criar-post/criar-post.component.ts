import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../Post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-criar-post',
  templateUrl: './criar-post.component.html',
  styleUrls: ['./criar-post.component.css']
})
export class CriarPostComponent {

  post: Post = {
    titulo: '',
    texto: '',
    autor: ''
  }

  postForm = new FormGroup({
    titulo: new FormControl('', [Validators.minLength(20)]),
    texto: new FormControl('', [Validators.minLength(30)]),
    autor: new FormControl('', [Validators.minLength(3)])
  })

  constructor(private service: PostService, private router: Router) { }

  create(): void {
    this.service.create(this.post).subscribe(resposta => {
      this.router.navigate(['']);
      this.service.message('Post criado com sucesso!');
    }, erro => {
      console.log(erro);
    })
  }

  cancelar(): void {
    this.router.navigate(['']);
    this.service.message('Criação do post foi cancelada!')
  }


  erroValidTitulo() {
    if (this.postForm.get('titulo')?.invalid) {
      return 'O titulo deve conter no minimo 20 caracteres';
    }
    return false;
  }

  erroValidTexto() {
    if (this.postForm.get('texto')?.invalid) {
      return 'O texto deve conter no minimo 30 caracteres';
    }
    return false;
  }

  erroValidAutor() {
    if (this.postForm.get('autor')?.invalid) {
      return 'O autor deve conter entre 3 e 32 caracteres';
    }
    return false;
  }
}
