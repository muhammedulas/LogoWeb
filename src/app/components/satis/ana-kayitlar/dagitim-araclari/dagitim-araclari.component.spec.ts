/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DagitimAraclariComponent } from './dagitim-araclari.component';

describe('DagitimAraclariComponent', () => {
  let component: DagitimAraclariComponent;
  let fixture: ComponentFixture<DagitimAraclariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DagitimAraclariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DagitimAraclariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
