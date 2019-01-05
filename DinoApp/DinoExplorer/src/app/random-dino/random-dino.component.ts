import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject'; 
import '../../assets/data.js';

declare var data: any;

@Component({
  selector: 'app-random-dino',
  templateUrl: './random-dino.component.html',
  styleUrls: ['./random-dino.component.css']
})

export class RandomDinoComponent implements OnInit {

  dino = new Subject<{
    name: string;
    appeared: number;
    height: number;
    length: number;
    order: string;
    vanished: number;
    weight: number;
  }>();

  constructor() { 
    this.dino.subscribe(
      (result ) => {
        console.log(result);
      }
    );
  }

  ngOnInit() {
    this.getNextDino();
  }

  getNextDino(){
    this.dino = new Subject<any>();
    // to mimic delayed loading the component calls next on observable subject after four seconds. 
    setTimeout( () =>
     this.dino.next(data.dinosaurs[Math.round((Math.random() * 5))])
    , 4000);
  }

}