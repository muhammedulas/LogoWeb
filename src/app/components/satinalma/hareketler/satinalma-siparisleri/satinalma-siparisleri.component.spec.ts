/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SatinalmaSiparisleriComponent } from './satinalma-siparisleri.component';

describe('SatinalmaSiparisleriComponent', () => {
  let component: SatinalmaSiparisleriComponent;
  let fixture: ComponentFixture<SatinalmaSiparisleriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatinalmaSiparisleriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatinalmaSiparisleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
