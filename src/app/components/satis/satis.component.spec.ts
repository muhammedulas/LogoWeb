/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SatisComponent } from './satis.component';

describe('SatisComponent', () => {
  let component: SatisComponent;
  let fixture: ComponentFixture<SatisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
