import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './core/app-routing.module'; 

import { AppComponent } from './core/app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';

import { DinosService } from './core/dinos.service';
import { DinoCardComponent } from './pages/home/dino-card/dino-card.component';
import { DetailComponent } from './pages/detail/detail.component';
import { LoadingComponent } from './core/ui/loading.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';

import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    Error404Component,
    DinoCardComponent,
    DetailComponent,
    LoadingComponent,
    AddComponent,
    EditComponent
  ],  
  providers: [Title, DinosService],
  bootstrap: [AppComponent]
})

export class AppModule { }
