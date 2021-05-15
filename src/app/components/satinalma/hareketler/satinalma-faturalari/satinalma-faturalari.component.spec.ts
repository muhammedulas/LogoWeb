/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SatinalmaFaturalariComponent } from './satinalma-faturalari.component';

describe('SatinalmaFaturalariComponent', () => {
  let component: SatinalmaFaturalariComponent;
  let fixture: ComponentFixture<SatinalmaFaturalariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatinalmaFaturalariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatinalmaFaturalariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
