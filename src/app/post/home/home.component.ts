import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.findAll();
  }

  addLike = 0;
  adicionarLike() {
    this.addLike = this.addLike + 1;
    console.log(this.addLike)
  }

  posts: Post[] = [];

  displayedColumns: string[] = ['id', 'titulo', 'texto', 'autor', 'data'];
  dataSource = this.posts;

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.posts = resposta;
      this.dataSource = this.posts;
    })
  }
}