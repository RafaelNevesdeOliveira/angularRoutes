import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    {id: 1, nome: 'José Alencar', email: 'jose@email.com'},
    {id: 2, nome: 'Maria Pedroso', email: 'Maria@email.com'},
    {id: 3, nome: 'Mario Pinto no Rego', email: 'Mario@email.com'}
  ]

  getAlunos(){
    return this.alunos
  }

  getAluno(id: number){
    let alunos = this.getAlunos();
    for(let i=0; i< alunos.length; i++){
      let aluno = alunos[i]
      if(aluno.id == id){
        return aluno
      }
    }
    return null
  }

  constructor() { }
}
