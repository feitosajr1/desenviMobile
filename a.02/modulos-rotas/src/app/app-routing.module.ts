import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { ClientListPage } from './pages/client-list-page-component';

//declaro uma rota constante para o modúlo que foi criado e instanciado em "client-list-page-components.ts" exportando a classe "ClientListPage", essa rota irá ter um path que servirá como um link para referênciar a rota até o objeto que quero usar.
const routes: Routes = [
  {
    path: 'client',
    component: ClientListPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//contina em "header.components.html"
