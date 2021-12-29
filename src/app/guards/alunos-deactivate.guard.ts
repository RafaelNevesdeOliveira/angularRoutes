import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunoDetalheComponent } from '../alunos/aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';

@Injectable({
  providedIn: 'root'
})
export class AlunosDeactivateGuard implements CanDeactivate<AlunoDetalheComponent> {
  canDeactivate(
    component: AlunoDetalheComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      return !component.formMudou

      return true;
  }

}
