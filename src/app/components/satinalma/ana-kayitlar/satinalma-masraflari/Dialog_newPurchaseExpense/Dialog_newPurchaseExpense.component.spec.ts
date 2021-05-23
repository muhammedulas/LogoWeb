/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_newPurchaseExpenseComponent } from './Dialog_newPurchaseExpense.component';

describe('Dialog_newPurchaseExpenseComponent', () => {
  let component: Dialog_newPurchaseExpenseComponent;
  let fixture: ComponentFixture<Dialog_newPurchaseExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_newPurchaseExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_newPurchaseExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
