import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss'],
})
export class CursoDetalheComponent implements OnInit {
  id?: any;
  inscricao?: Subscription;
  curso: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoService: CursoService,
    private router: Router
  ) {
    console.log(this.activatedRoute);

    // this.id = this.activatedRoute.snapshot.params['id']
  }

  ngOnInit() {
    this.inscricao = this.activatedRoute.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.curso = this.cursoService.getCurso(this.id);

        if (this.curso == null){
            this.router.navigate(['/naoEncontrado']);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.inscricao?.unsubscribe();
  }
}
