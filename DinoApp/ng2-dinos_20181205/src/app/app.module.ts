import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 

import { AppComponent } from './core/app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';

import { AppRoutingModule } from './core/app-routing.module';

import { DinosService } from './core/dinos.service';
import { DinoCardComponent } from './pages/home/dino-card/dino-card.component';
import { DetailComponent } from './pages/detail/detail.component';
import { LoadingComponent } from './core/ui/loading.component'; 

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
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
    LoadingComponent
  ],  
  providers: [Title, DinosService],
  bootstrap: [AppComponent]
})

export class AppModule { }
