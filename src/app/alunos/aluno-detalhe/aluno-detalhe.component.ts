import { AlunosService } from './../alunos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  id?: any;
  inscricao?: Subscription;
  aluno: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.inscricao = this.activatedRoute.params.subscribe((
      (params: any) =>{
        this.id = params['id'];
        this.aluno = this.alunosService.getAluno(this.id)

        if(this.aluno == null){
          this.router.navigate(['/naoEncontrado'])
        }
      }
    ))
  }

  ngOnDestroy(): void {
    this.inscricao?.unsubscribe();
  }

}
