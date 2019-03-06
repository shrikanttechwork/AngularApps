import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { Dino } from './models/dino.model';
import { DinoDetail } from './models/dino-detail.model';

@Injectable()
export class DinosService {

  //private baseUrl = 'http://localhost:3001/api/';
  private baseUrl = 'http://localhost:61832/API/Dino/';

  constructor(private http: Http) { }

  getAllDinos$(): Observable<Dino[]> {
    return this.http
      .get(`${this.baseUrl}Dinosaurs`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getDino$(id: number): Observable<DinoDetail> {
    return this.http
      .get(`${this.baseUrl}dinosaur/${id}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(err: Response | any) {
    let errorMsg = err.message || 'Unable to retrieve data';
    return Observable.throw(errorMsg);
  }
}
