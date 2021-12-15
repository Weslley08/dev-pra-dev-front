import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

// import { environmentProd } from 'src/environments/environment.prod';
import { environment } from 'src/environments/environment';
import { Pessoa } from './Pessoa';

@Injectable({
  providedIn: 'root'
})

export class PessoaService {

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

  findAll(): Observable<Pessoa[]> {
    const url = this.baseUrl + "/pessoa"
    return this.http.get<Pessoa[]>(url);
  }

  findById(id: any): Observable<Pessoa> {
    const url = this.baseUrl + "/pessoa/" + id;
    return this.http.get<Pessoa>(url);
  }

  create(pessoa: Pessoa): Observable<Pessoa> {
    const url = this.baseUrl + "/pessoa/create"
    return this.http.post<Pessoa>(url, pessoa);
  }

  update(pessoa: Pessoa): Observable<Pessoa> {
    const url = this.baseUrl + "/pessoa/update/" + pessoa.idPessoa;
    return this.http.put<Pessoa>(url, pessoa);
  }

  delete(id: any): Observable<void> {
    const url = this.baseUrl + "/pessoa/delete/" + id;
    return this.http.delete<void>(url);
  }
}
