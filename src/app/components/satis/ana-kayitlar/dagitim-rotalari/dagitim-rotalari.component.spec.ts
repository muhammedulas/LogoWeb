/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DagitimRotalariComponent } from './dagitim-rotalari.component';

describe('DagitimRotalariComponent', () => {
  let component: DagitimRotalariComponent;
  let fixture: ComponentFixture<DagitimRotalariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DagitimRotalariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DagitimRotalariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
