import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DinosService } from '../../core/dinos.service';
import { Dino } from '../../core/models/dino.model';
import { FilterService } from '../../core/filter.service';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DinosService, FilterService, NgxPaginationModule]
})

export class HomeComponent implements OnInit {
  dinos: Dino[];
  filteredDinos: Dino[];
  error: boolean;
  pageName = 'Dinosaurs';
  query = '';
  loading: boolean;
  p: number = 1;
  
  constructor(private titleService: Title, private dinosService: DinosService, private filterService: FilterService) { }

  ngOnInit() {
    this.loading = true;
    this.titleService.setTitle(this.pageName);
    this.getDinos();
  }

  getDinos() {
    this.dinosService
      .getAllDinos$()
      .subscribe(
        res => {
          this.dinos = res;
          this.filteredDinos = res;
          this.loading = false;
        },
        err => {
          this.error = true;
          this.loading = false;
        }
      );
  }

  filterDinos() {
    this.filteredDinos = this.filterService.search(this.dinos, this.query);
  }

  resetQuery() {
    this.query = '';
    this.filteredDinos = this.dinos;
  }

  get noSearchResults() {
    return this.dinos && !this.filteredDinos.length && this.query && !this.error;
  }

  get isLoaded() {
    return this.loading === false;
  }
 
}
