/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_editInspectQuickProdSlipComponent } from './dialog_editInspectQuickProdSlip.component';

describe('Dialog_editInspectQuickProdSlipComponent', () => {
  let component: Dialog_editInspectQuickProdSlipComponent;
  let fixture: ComponentFixture<Dialog_editInspectQuickProdSlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_editInspectQuickProdSlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_editInspectQuickProdSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
