import { AppRoutingModule } from 'src/app/app-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login-registro/login-registro.component';
import { DeletarPessoaComponent } from './deletar-pessoa/deletar-pessoa.component';
import { AtualizarPessoaComponent } from './atualizar-pessoa/atualizar-pessoa.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    AtualizarPessoaComponent,
    DeletarPessoaComponent,
    DashboardComponent
  ],
  exports: [
    LoginComponent,
    AtualizarPessoaComponent,
    DeletarPessoaComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,

    FormsModule,

    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [
    MatNativeDateModule,
    MatDatepickerModule
  ],
})
export class PessoaModule { }
