import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoService } from './curso.service';
import {  CursoRoutingModule } from './curso.routing.module';

@NgModule({
  declarations: [
    CursoComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
  ],
  imports: [CommonModule, CursoRoutingModule],
  providers: [CursoService],
})
export class CursoModule {}
