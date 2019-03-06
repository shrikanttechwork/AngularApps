import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Title } from '@angular/platform-browser'; 

import { DinosService } from '../../core/dinos.service';
import { DinoDetail } from '../../core/models/dino-detail.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  model: any = {};
  
  dino: DinoDetail;
  error: boolean;
  loading: boolean;

  constructor(private titleService: Title, private dinosService: DinosService, private router: Router) { }
  
    postDino(dino) { 
      this.loading = true; 
        this.dinosService.addDino$(dino)
          .subscribe(
            res => {
              console.log(res);
              this.router.navigate(['/dinosaur']);
              this.loading = false;
            },
            err => {
              this.error = true;
              this.loading = false;
            }
          ); 
    }

  ngOnInit() 
  {
       
  }

  onSubmit() {
    this.dino = this.model
    this.postDino(this.dino);
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dino))
  }

  get isLoaded() {
    return this.loading === false;
  }

}
