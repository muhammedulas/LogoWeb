/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SatisMasraflariComponent } from './satis-masraflari.component';

describe('SatisMasraflariComponent', () => {
  let component: SatisMasraflariComponent;
  let fixture: ComponentFixture<SatisMasraflariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatisMasraflariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatisMasraflariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
