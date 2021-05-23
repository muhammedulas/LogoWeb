/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_editInspectPurchaseDiscountComponent } from './Dialog_editInspectPurchaseDiscount.component';

describe('Dialog_editInspectPurchaseDiscountComponent', () => {
  let component: Dialog_editInspectPurchaseDiscountComponent;
  let fixture: ComponentFixture<Dialog_editInspectPurchaseDiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_editInspectPurchaseDiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_editInspectPurchaseDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
