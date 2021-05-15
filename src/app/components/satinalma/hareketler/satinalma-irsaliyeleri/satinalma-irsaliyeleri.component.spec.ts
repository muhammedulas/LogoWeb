/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SatinalmaIrsaliyeleriComponent } from './satinalma-irsaliyeleri.component';

describe('SatinalmaIrsaliyeleriComponent', () => {
  let component: SatinalmaIrsaliyeleriComponent;
  let fixture: ComponentFixture<SatinalmaIrsaliyeleriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatinalmaIrsaliyeleriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatinalmaIrsaliyeleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
