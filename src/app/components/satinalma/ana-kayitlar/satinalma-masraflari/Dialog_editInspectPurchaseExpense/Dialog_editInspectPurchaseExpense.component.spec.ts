/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_editInspectPurchaseExpenseComponent } from './Dialog_editInspectPurchaseExpense.component';

describe('Dialog_editInspectPurchaseExpenseComponent', () => {
  let component: Dialog_editInspectPurchaseExpenseComponent;
  let fixture: ComponentFixture<Dialog_editInspectPurchaseExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_editInspectPurchaseExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_editInspectPurchaseExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
