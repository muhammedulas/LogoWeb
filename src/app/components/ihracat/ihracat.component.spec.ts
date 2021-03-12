/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IhracatComponent } from './ihracat.component';

describe('IhracatComponent', () => {
  let component: IhracatComponent;
  let fixture: ComponentFixture<IhracatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IhracatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IhracatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
