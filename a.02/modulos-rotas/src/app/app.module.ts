import { ComponentModule } from './components/components.modules';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header-components';
import { FormsModule } from '@angular/forms';

//Ng é como se fosse um objeto passando parêmetros e caracteristicas como declarations, imports, proividers, bootstraps.
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
// exporta a classe para ser usada.
export class AppModule {}
