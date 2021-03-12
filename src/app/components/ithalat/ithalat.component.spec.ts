/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IthalatComponent } from './ithalat.component';

describe('IthalatComponent', () => {
  let component: IthalatComponent;
  let fixture: ComponentFixture<IthalatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IthalatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IthalatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
