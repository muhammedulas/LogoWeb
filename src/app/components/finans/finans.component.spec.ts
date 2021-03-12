/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FinansComponent } from './finans.component';

describe('FinansComponent', () => {
  let component: FinansComponent;
  let fixture: ComponentFixture<FinansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
