/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_editInspectSafeDepositSlipComponent } from './dialog_editInspectSafeDepositSlip.component';

describe('Dialog_editInspectSafeDepositSlipComponent', () => {
  let component: Dialog_editInspectSafeDepositSlipComponent;
  let fixture: ComponentFixture<Dialog_editInspectSafeDepositSlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_editInspectSafeDepositSlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_editInspectSafeDepositSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
