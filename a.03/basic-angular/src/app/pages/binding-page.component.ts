import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  //Se usa o [] para representar o binding dessa propriedade na imagem. também podemos fazer um binding de estilos
  template:
    '<h1>Imagem do Angular</h1> <img [src] = "imagem" [style]="{width: width}"/> ',
})
export class BindingPageComponent {
  width = '100px';
  imagem =
    'https://th.bing.com/th/id/R.3ed91427828c7b282e4926da2423b8d6?rik=rPGjT4VSZUZkKg&pid=ImgRaw&r=0';
}
