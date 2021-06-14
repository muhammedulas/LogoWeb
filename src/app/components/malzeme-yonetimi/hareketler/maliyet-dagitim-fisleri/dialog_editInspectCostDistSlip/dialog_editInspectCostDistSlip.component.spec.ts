/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_editInspectCostDistSlipComponent } from './dialog_editInspectCostDistSlip.component';

describe('Dialog_editInspectCostDistSlipComponent', () => {
  let component: Dialog_editInspectCostDistSlipComponent;
  let fixture: ComponentFixture<Dialog_editInspectCostDistSlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_editInspectCostDistSlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_editInspectCostDistSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
