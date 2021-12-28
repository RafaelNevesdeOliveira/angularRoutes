import { AlunosComponent } from './alunos.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

const routes: Routes = [
  {
    path:'', component: AlunosComponent,
    children: [
      {
        path:'novo', component: AlunoFormComponent
      },
      {
        path:':id', component: AlunoDetalheComponent
      },
      {
        path:':id/editar', component: AlunoFormComponent
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
