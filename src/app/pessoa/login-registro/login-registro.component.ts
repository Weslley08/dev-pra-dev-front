import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Pessoa } from 'src/app/pessoa/Pessoa';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
import { PessoaService } from '../pessoa.service';

const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD MM YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-login-registro',
  templateUrl: './login-registro.component.html',
  styleUrls: ['./login-registro.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})

export class LoginComponent {
  hide = true;

  pessoa: Pessoa = {
    nome: '',
    sobrenome: '',
    sexo: '',
    email: '',
    dataDeNascimento: new Date,
    telefone: '',
  }

  dia = this.pessoa.dataDeNascimento.getDate();
  mes = this.pessoa.dataDeNascimento.getMonth() + 1;
  ano = this.pessoa.dataDeNascimento.getFullYear();
  dataFormatada = `${this.dia}-${this.mes}-${this.ano}`;

  nome = new FormControl('', [Validators.minLength(3)]);
  sobrenome = new FormControl('', [Validators.minLength(3)]);
  telefone = new FormControl('', [Validators.minLength(11)]);
  email = new FormControl('', [Validators.email]);

  constructor(private service: PessoaService, private router: Router) { }

  create(): void {
    this.service.create(this.pessoa).subscribe(resposta => {
      console.log(this.dataFormatada);
      this.service.message('Pessoa criada com sucesso!');
    }, erro => {
      console.log(this.dataFormatada);
      console.log(erro);
    })
  }

  login() {
    this.router.navigate(['dashboard'])
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

  erroValidTelefone() {
    if (this.telefone.invalid) {
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
