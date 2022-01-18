import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PostModule } from './post/post.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { TemplateModule } from './template/template.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    PessoaModule,
    PostModule,
    TemplateModule,

    AppRoutingModule,

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
