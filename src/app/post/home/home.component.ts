import { Post } from './../Post';
import { Component, OnInit } from '@angular/core';
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

  posts: Post[] = [];
  post: Post = { like: 0 }


  displayedColumns: string[] = ['id', 'titulo', 'texto', 'autor', 'data', 'like'];
  dataSource = this.posts;

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.posts = resposta;
      this.dataSource = this.posts;
    })
  }
}