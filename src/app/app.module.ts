import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CtaComponent } from './components/cta/cta.component';
import { IntroducaoComponent } from './components/home/introducao/introducao.component';
import { ProjetosComponent } from './components/home/projetos/projetos.component';
import { FormacaoComponent } from './components/home/formacao/formacao.component';
import { ExperienciaComponent } from './components/paginas/experiencia/experiencia.component';
import { ContatoComponent } from './components/paginas/contato/contato.component';
import { HomeComponent } from './components/home/home/home.component';
import { ExtraComponent } from './components/paginas/extra/extra.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CtaComponent,
    IntroducaoComponent,
    ProjetosComponent,
    FormacaoComponent,
    ExperienciaComponent,
    ContatoComponent,
    HomeComponent,
    ExtraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
