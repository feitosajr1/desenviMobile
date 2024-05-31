import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  //Se usa o [] para representar o binding dessa propriedade na imagem. também podemos fazer um binding de estilos
  template:'<h1>Imagem do Angular</h1> <img [src] = "imagem" [style]="{width: width}"/> <div class="alert" [class]="{sucess: sucesso}">Alert</div> <button (click)="enviarDados()">Enviar Dados</button>',
  styles: [
    '.alert{width: 200px; height: 100px; border: 1px solid blue; } .sucess {border: 5px solid green; }',
  ],
})
export class BindingPageComponent {
  width = '100px';
  imagem =
    'https://th.bing.com/th/id/R.3ed91427828c7b282e4926da2423b8d6?rik=rPGjT4VSZUZkKg&pid=ImgRaw&r=0';

  sucesso = true;

  enviarDados() {
    this.sucesso = !this.sucesso;
  }
}
