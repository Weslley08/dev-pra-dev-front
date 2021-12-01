import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-precos',
  templateUrl: './precos.component.html',
  styleUrls: ['./precos.component.css']
})

export class PrecosComponent {

  constructor(private router: Router) { }

  criarConta() {
    this.router.navigate(['criarConta']);
  }

}
