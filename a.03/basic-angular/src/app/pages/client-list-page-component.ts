import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//descrevo o que é o componente
@Component({
  selector: 'app-client-list-page',
  templateUrl: './client-list-page-component.html',
})

//exporto o componente em uma classe para ser usada.
export class ClientListPage {}

//continua em "app-routing.modules"
