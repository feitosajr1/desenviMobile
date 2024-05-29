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

  valor: {
    descricao: string;
    nome: string;
    id: number;
  } = {
    descricao: 'teste',
    nome: 'nome',
    id: 1,
  };

  valores = [
    {
      descricao: 'teste',
      nome: 'nome',
      id: 1,
    },
    { descricao: 'teste 2', nome: 'nome 2', id: 2 },
  ];
}
