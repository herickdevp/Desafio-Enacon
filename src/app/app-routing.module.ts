import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { ExperienciaComponent } from './components/paginas/experiencia/experiencia.component';
import { ContatoComponent } from './components/paginas/contato/contato.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'contato', component: ContatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
