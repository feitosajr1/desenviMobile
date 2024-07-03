import { Component } from '@angular/core'; //import é feito para que tenha valor o @component

@Component({ //Chamado de decorator, serve para ensinar ao framework o que é essa classe, um componente. (O componente é configurado com objetos)
  selector: 'app-header', //O seletor indica qual que é a tag que vai ser utilizada para instancionar o componente nos locais que utilizam ele.
  templateUrl: './header.components.html', //Esse objeto é a página html que foi criada para o componente "header-components.html". O html também pode ser escrito aqui usando o objeto "template:"
  // styleUrl: "" também pode ser usado para o estilo do componente,
})
export class HeaderComponent {}

// Continua em App.module.ts
