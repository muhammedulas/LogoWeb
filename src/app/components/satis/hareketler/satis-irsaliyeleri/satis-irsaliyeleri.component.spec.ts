/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SatisIrsaliyeleriComponent } from './satis-irsaliyeleri.component';

describe('SatisIrsaliyeleriComponent', () => {
  let component: SatisIrsaliyeleriComponent;
  let fixture: ComponentFixture<SatisIrsaliyeleriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatisIrsaliyeleriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatisIrsaliyeleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
