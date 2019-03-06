import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Router} from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 

import { DinosService } from '../../core/dinos.service';
import { DinoDetail } from '../../core/models/dino-detail.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  dino: DinoDetail;
  error: boolean;
  loading: boolean;
  editForm: FormGroup; 
  model: any = {};
  arr: any[]=[];
  submitted = false;
 


  constructor(private titleService: Title,
    private dinosService: DinosService,
    private route: ActivatedRoute,
    private fb: FormBuilder, private router: Router) { this.createForm(); }

    createForm() {
 
      this.editForm = this.fb.group({
             Id: [],
             Name: ['', Validators.required ],
             Pronunciation: ['', Validators.required ],
             MeaningOfName: ['', Validators.required ],
             Diet: ['', Validators.required ],
             LengthOfDino: ['', Validators.required ],
             Period: ['', Validators.required ],
             Mya: ['', Validators.required ],
             Info: ['', Validators.required ]
         });
      }

    getDino() {
      this.route.params.forEach((params: Params) => {
        let id = +params['id'];   // convert string to number
  
        this.dinosService.getDino$(id)
          .subscribe(
            res => {
              this.dino = res;
              this.titleService.setTitle(this.dino.name);
              this.loading = false;
              this.editForm.setValue(res);
            },
            err => {
              this.error = true;
              this.loading = false;
            }
          );
      });
    }

    putDino(dino) { 
      this.loading = true; 
        this.dinosService.updateDino$(dino)
          .subscribe(
            res => {
              console.log(res);
              this.router.navigate(['/dinosaur']);
              this.titleService.setTitle(this.dino.name);
              this.loading = false;
            },
            err => {
              this.error = true;
              this.loading = false;
            }
          ); 
    }

  ngOnInit() {
    this.loading = true;
    this.getDino();
  }
 
   // convenience getter for easy access to form fields
   get f() { return this.editForm.controls; }

  onSubmit() {  
    this.submitted = true;
    
     // stop here if form is invalid
     if (this.editForm.invalid) {
      return;
    }

    console.log(this.editForm.value);
    this.putDino(this.editForm.value); 
   }

   get isLoaded() {
    return this.loading === false;
  }

}
