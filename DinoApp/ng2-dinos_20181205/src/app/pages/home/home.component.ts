import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DinosService } from '../../core/dinos.service';
import { Dino } from '../../core/models/dino.model';
import { FilterService } from '../../core/filter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DinosService, FilterService]
})
export class HomeComponent implements OnInit {
  dinos: Dino[];
  filteredDinos: Dino[];
  error: boolean;
  pageName = 'Dinosaurs';
  query = '';
  loading: boolean;

  constructor(private titleService: Title, private dinosService: DinosService, private filterService: FilterService) { }

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

  ngOnInit() {
    this.loading = true;
    this.titleService.setTitle(this.pageName);
    this.getDinos();
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
