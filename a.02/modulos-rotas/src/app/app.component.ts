import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-primeira-aula';
  descricao1 = 'Descrição item 2';
  clientPremium = true;

  valores = [
    {
      descricao: 'teste',
      nome: 'nome',
      id: 1,
    },
  ];
}
