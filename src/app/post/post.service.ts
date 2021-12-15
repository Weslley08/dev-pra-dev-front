import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Post } from './Post';

// import { environmentProd } from 'src/environments/environment.prod';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})

export class PostService {

	// Localmente
	baseUrl: String = environment.baseUrl

	// Em produção
	// baseUrl: String = environmentProd.baseUrl;

	constructor(private http: HttpClient, private snack: MatSnackBar) { }

	message(mensagem: string): void {
		this.snack.open(`${mensagem}`, 'OK', {
			horizontalPosition: 'end',
			verticalPosition: 'top',
			duration: 5000
		})
	}

	findAll(): Observable<Post[]> {
		const url = this.baseUrl + "/post"
		return this.http.get<Post[]>(url);
	}

	findById(id: any): Observable<Post> {
		const url = this.baseUrl + "/post/" + id;
		return this.http.get<Post>(url);
	}

	create(post: Post): Observable<Post> {
		const url = this.baseUrl + "/post/create"
		return this.http.post<Post>(url, post);
	}

	update(post: Post): Observable<Post> {
		const url = this.baseUrl + "/post/update/" + post.idPost;
		return this.http.put<Post>(url, post);
	}

	delete(id: any): Observable<void> {
		const url = this.baseUrl + "/post/delete/" + id;
		return this.http.delete<void>(url);
	}

}




