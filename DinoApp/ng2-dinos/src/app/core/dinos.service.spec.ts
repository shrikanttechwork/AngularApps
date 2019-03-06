/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DinosService } from './dinos.service';

describe('DinosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DinosService]
    });
  });

  it('should ...', inject([DinosService], (service: DinosService) => {
    expect(service).toBeTruthy();
  }));
});
