// ng2-dinos/src/app/core/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { Error404Component } from '../pages/error404/error404.component';
import { DetailComponent } from '../pages/detail/detail.component';
import { AddComponent } from '../pages/add/add.component';
import { EditComponent } from '../pages/edit/edit.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'dinosaur',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'dinosaur/detail/:id',
        component: DetailComponent 
      },
      {
        path: 'dinosaur/add',
        component: AddComponent
      },
      {
        path: 'dinosaur/edit/:id',
        component: EditComponent 
      },
      {
        path: '**',
        component: Error404Component
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}