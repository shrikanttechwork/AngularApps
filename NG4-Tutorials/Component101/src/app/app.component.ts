import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<h1>HI,,,,</h1>
  <p>How are you doing?</p>
  <p>Name:</p> {{ myObject.name }}
  <ul>
    <li *ngFor = "let arr of myArr"> {{ arr }} </li>
  </ul>

  <div *ngIf = "myVar; then tmpl1 else tmpl2"></div>
  <ng-template #tmpl1>True</ng-template>
  <ng-template #tmpl2>False</ng-template>
  <img src="{{ angLogo }}" />
  <button [disabled]="buttonStatus">my button</button>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Component101';
  myObject = {
    name: 'shrikant',
    gender: 'male',
    age: '30'
  };
  myArr = ['Shrikant', 'Anuja', 'Pavan', 'Rahul', 'Mona'];
  myVar = true;
  angLogo = 'https://angular.io/assets/images/logos/angular/angular.svg';
  buttonStatus = false;
}
