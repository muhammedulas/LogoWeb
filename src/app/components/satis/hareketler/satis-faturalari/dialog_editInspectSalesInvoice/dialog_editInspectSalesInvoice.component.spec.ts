/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_editInspectSalesInvoiceComponent } from './dialog_editInspectSalesInvoice.component';

describe('Dialog_editInspectSalesInvoiceComponent', () => {
  let component: Dialog_editInspectSalesInvoiceComponent;
  let fixture: ComponentFixture<Dialog_editInspectSalesInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_editInspectSalesInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_editInspectSalesInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
