import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../Post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-deletar-post',
  templateUrl: './deletar-post.component.html',
  styleUrls: ['./deletar-post.component.css']
})
export class DeletarPostComponent implements OnInit {

  id_post = '';

  post: Post = {
    titulo: '',
    texto: '',
    autor: ''
  }

  constructor(
    private service: PostService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_post = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  delete(): void {
    this.service.delete(this.id_post).subscribe(resposta => {
      this.router.navigate(['']);
      this.service.message('Post deletado com sucesso!')
    })
  }

  cancelar(): void {
    this.router.navigate(['']);
    this.service.message('Criação do post foi cancelada!')
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

}

