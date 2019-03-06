import { Component, OnInit, Input } from '@angular/core';

import { Dino } from '../../../core/models/dino.model';

@Component({
  selector: 'app-dino-card',
  templateUrl: './dino-card.component.html',
  styleUrls: ['./dino-card.component.scss']
})
export class DinoCardComponent implements OnInit {

  @Input() dino: Dino;

  constructor() { }

  ngOnInit() {
  }

}
