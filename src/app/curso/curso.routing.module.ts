import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoComponent } from './curso.component';

const cursosRoutes: Routes = [
  {
    path:'', component: CursoComponent,
    children:[
      {
        path:':id', component: CursoDetalheComponent
      },
      {
        path:'naoEncontrado', component: CursoNaoEncontradoComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
