/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SatinalmaComponent } from './satinalma.component';

describe('SatinalmaComponent', () => {
  let component: SatinalmaComponent;
  let fixture: ComponentFixture<SatinalmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatinalmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatinalmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
