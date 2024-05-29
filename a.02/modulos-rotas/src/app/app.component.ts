import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-primeira-aula';
  descricao1 = 'Descrição item 2';
  clientPremium = false;

  nome = '';

  valor: {
    descricao: string;
    nome: string;
    id: number;
  } = {
    descricao: 'teste',
    nome: 'nome',
    id: 1,
  };

  valores1 = [
    {
      descricao1: 'teste',
      nome1: 'nome',
      id1: 1,
    },
    { descricao1: 'teste 2', nome1: 'nome 2', id1: 2 },
  ];

  valores = [
    {
      descricao: 'teste',
      nome: 'nome',
      id: 1,
    },
    { descricao: 'teste 2', nome: 'nome 2', id: 2 },
  ];

  adicionar() {
    this.valores.push({ descricao: 'adicionado', nome: this.nome, id: 3 });
  }
}
