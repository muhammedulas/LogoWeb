/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_newPurchaseDiscountComponent } from './Dialog_newPurchaseDiscount.component';

describe('Dialog_newPurchaseDiscountComponent', () => {
  let component: Dialog_newPurchaseDiscountComponent;
  let fixture: ComponentFixture<Dialog_newPurchaseDiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_newPurchaseDiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_newPurchaseDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
