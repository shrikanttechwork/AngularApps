import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Dino } from './models/dino.model';
import { DinoDetail } from './models/dino-detail.model';

@Injectable()
export class DinosService {

  //private baseUrl = 'http://localhost:3001/api/';
  private baseUrl = 'http://localhost:61832/API/Dino/';
  dino: DinoDetail;

  constructor(private http: HttpClient) { }

  getAllDinos$(){
    return this.http.get<any>(`${this.baseUrl}Dinosaurs`);
  }

  getDino$(id: number): Observable<DinoDetail> {
    return this.http.get<DinoDetail>(`${this.baseUrl}dinosaur/${id}`);
  }

  addDino$(dino): Observable<DinoDetail> {
    return this.http.post<DinoDetail>(`${this.baseUrl}InsertDinoDetails`, dino);
  }

  updateDino$(dino): Observable<DinoDetail> {
    return this.http.put<DinoDetail>(`${this.baseUrl}UpdateDinoDetails`, dino);
  }

  deleteDino$(id: number): Observable<DinoDetail> {
    return this.http.delete<DinoDetail>(`${this.baseUrl}DeleteDinoData/${id}`);
  }

  private handleError(err: Response | any) {
    let errorMsg = err.message || 'Unable to retrieve data';
    return Observable.throw(errorMsg);
  }
}
