import { Component, OnInit } from '@angular/core';

import '../../assets/data.js';
declare var data: any;

@Component({
  selector: 'app-dino-list',
  templateUrl: './dino-list.component.html',
  styleUrls: ['./dino-list.component.css']
})

export class DinoListComponent implements OnInit {

  dinosaurs = data.dinosaurs;

  constructor() { }

  ngOnInit() {
  }

}
