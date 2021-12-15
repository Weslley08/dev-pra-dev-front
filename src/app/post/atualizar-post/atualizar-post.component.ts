import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../Post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-atualizar-post',
  templateUrl: './atualizar-post.component.html',
  styleUrls: ['./atualizar-post.component.css']
})
export class AtualizarPostComponent implements OnInit {

  id_post = '';

  post: Post = {
    titulo: '',
    texto: '',
    autor: ''
  }

  titulo = new FormControl('', [Validators.minLength(20)]);
  texto = new FormControl('', [Validators.minLength(30)]);
  autor = new FormControl('', [Validators.minLength(3)]);

  constructor(
    private service: PostService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_post = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }


  update(): void {
    this.service.update(this.post).subscribe(resposta => {
      this.router.navigate(['']);
      this.service.message('Post atualizado com sucesso!')
    })
  }

  findById(): void {
    this.service.findById(this.id_post).subscribe(resposta => {
      this.post = resposta;
    }, erro => {
      if (erro.error.message.match("Nada foi encontrado no ID")) {
        this.service.message("Esse post não existe")
      } else {
        console.log(erro);
      }
    })
  }

  cancelar(): void {
    this.router.navigate(['']);
    this.service.message('Criação do post foi cancelada!')
  }


  erroValidTitulo() {
    if (this.titulo.invalid) {
      return 'O titulo deve conter no minimo 20 caracteres';
    }
    return false;
  }

  erroValidTexto() {
    if (this.texto.invalid) {
      return 'O texto deve conter no minimo 30 caracteres';
    }
    return false;
  }

  erroValidAutor() {
    if (this.autor.invalid) {
      return 'O autor deve conter entre 3 e 32 caracteres';
    }
    return false;
  }

}

