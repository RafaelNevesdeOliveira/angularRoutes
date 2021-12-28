import { CursoService } from './curso.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss'],
})
export class CursoComponent implements OnInit {
  cursos?: any[];

  pagina?: any;
  inscricao?: Subscription

  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }

  proximaPagina(){
    // this.pagina++
    this.router.navigate(['curso'],
      {queryParams:{'pagina': ++this.pagina}})
  }

  ngOnDestroy(): void {
    this.inscricao?.unsubscribe()

  }
}
