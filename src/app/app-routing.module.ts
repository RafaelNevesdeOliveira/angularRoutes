import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {
  //   path:'curso', component: CursoComponent
  // },
  // {
  //   path:'curso/:id', component: CursoDetalheComponent
  // },
  {
    path:'login', component: LoginComponent
  },
  // {
  //   path:'naoEncontrado', component: CursoNaoEncontradoComponent
  // },
  {
    path:'', component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
