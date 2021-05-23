/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_newServiceSalePriceComponent } from './Dialog_newServiceSalePrice.component';

describe('Dialog_newServiceSalePriceComponent', () => {
  let component: Dialog_newServiceSalePriceComponent;
  let fixture: ComponentFixture<Dialog_newServiceSalePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_newServiceSalePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_newServiceSalePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
