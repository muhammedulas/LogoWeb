/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dilog_deleteItemSlipComponent } from './dilog_deleteItemSlip.component';

describe('Dilog_deleteItemSlipComponent', () => {
  let component: Dilog_deleteItemSlipComponent;
  let fixture: ComponentFixture<Dilog_deleteItemSlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dilog_deleteItemSlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dilog_deleteItemSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
