import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { CursoService } from './curso/curso.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursoModule } from './curso/curso.module';
import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CursoModule,
    AlunosModule,
    ReactiveFormsModule,
  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
