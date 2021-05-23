/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_editInspectServiceSalePriceComponent } from './Dialog_editInspectServiceSalePrice.component';

describe('Dialog_editInspectServiceSalePriceComponent', () => {
  let component: Dialog_editInspectServiceSalePriceComponent;
  let fixture: ComponentFixture<Dialog_editInspectServiceSalePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_editInspectServiceSalePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_editInspectServiceSalePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
