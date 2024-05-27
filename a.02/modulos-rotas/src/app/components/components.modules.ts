import { NgModule } from '@angular/core';
import { HeaderComponent } from './header-components';
import { RouterModule } from '@angular/router';

@NgModule({
  //importamos as rotas no moódulo ele inteiro foi criado manualmente, para que a rota que criamos funcione, elas precisam ser importadas aqui com a classe do modulo de rotas "RouterModule"
  imports: [RouterModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class ComponentModule {}
