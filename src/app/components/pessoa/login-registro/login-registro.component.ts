import { Router } from '@angular/router';
import { PessoaService } from './../../../service/pessoa.service';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Pessoa } from 'src/app/models/Pessoa';

@Component({
  selector: 'app-login-registro',
  templateUrl: './login-registro.component.html',
  styleUrls: ['./login-registro.component.css'],
})

export class LoginComponent {

  pessoa: Pessoa = {
    nome: '',
    sobrenome: '',
    sexo: '',
    email: '',
    dataDeNascimento: '',
    numero: '',
    numero_alternativo: ''
  }

  nome = new FormControl('', [Validators.minLength(3)]);
  sobrenome = new FormControl('', [Validators.minLength(3)]);

  numero = new FormControl('', [Validators.minLength(11)]);
  numero_alternativo = new FormControl('', [Validators.minLength(11)]);
  
  email = new FormControl('', [Validators.email]);
  data =  new FormControl('');
  
  constructor(private service: PessoaService, private router: Router) { }
  
  hide = true;

  create(): void {
    this.service.create(this.pessoa).subscribe(resposta => {
      this.router.navigate(['loginRegistro']);
      this.service.message('Pessoa criada com sucesso!');
    }, erro => {
      console.log(erro);
    })
  }


  erroValidNome() {
    if (this.nome.invalid) {
      return 'O nome deve conter no minimo 3 caracteres';
    }
    return false;
  }

  erroValidSobrenome() {
    if (this.sobrenome.invalid) {
      return 'O sobrenome deve conter no minimo 3 caracteres';
    }
    return false;
  }

  erroValidNumero() {
    if (this.numero.invalid) {
      return 'O numero deve conter no minimo 11 caracteres';
    }
    return false;
  }

  erroValidEmail() {
    if (this.email.invalid) {
      return 'O email deve conter o @dominio.com';
    }
    return false;
  }

}
