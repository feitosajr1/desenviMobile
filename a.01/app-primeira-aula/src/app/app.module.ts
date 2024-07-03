import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header-components';
import { RodapeComponent } from './components/rodape-components';

@NgModule({ //Após criar o componente (header-components), precisamos instanciar o componente nos modulos. Instanciamos a classe exportada no Ts do componente que criamos (export class HeaderComponent)
  declarations: [AppComponent, HeaderComponent, RodapeComponent], //Agora esse componente está disponivél no modulo e em qualquer página agora, podemos usar o HeaderComponents
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}

