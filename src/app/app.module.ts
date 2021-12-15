import { PostModule } from './post/post.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PessoaModule,
    PostModule,
    TemplateModule,

    BrowserModule,
    BrowserAnimationsModule,

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
