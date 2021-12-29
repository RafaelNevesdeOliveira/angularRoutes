import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosGuard } from './guards/alunos.guard';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {
    path: 'curso',
    loadChildren: () =>
      import('./curso/curso.module').then((module) => module.CursoModule),
      canActivate:[AuthGuard],
      canActivateChild:[CursosGuard]
  },

  {
    path: 'alunos',
    loadChildren: () =>
      import('./alunos/alunos.module').then((module) => module.AlunosModule),
      canActivate:[AuthGuard],
      canActivateChild:[AlunosGuard]
  },

  // {
  //   path:'curso', component: CursoComponent
  // },
  // {
  //   path:'curso/:id', component: CursoDetalheComponent
  // },
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path:'naoEncontrado', component: CursoNaoEncontradoComponent
  // },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: '', redirectTo:'home', pathMatch: 'full'
  },
  {
    path:'**', component: PaginaNaoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
