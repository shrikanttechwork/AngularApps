/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RandomDinoComponent } from './random-dino.component';

describe('RandomDinoComponent', () => {
  let component: RandomDinoComponent;
  let fixture: ComponentFixture<RandomDinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomDinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomDinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
