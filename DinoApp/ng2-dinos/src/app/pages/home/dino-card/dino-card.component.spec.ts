/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DinoCardComponent } from './dino-card.component';

describe('DinoCardComponent', () => {
  let component: DinoCardComponent;
  let fixture: ComponentFixture<DinoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
