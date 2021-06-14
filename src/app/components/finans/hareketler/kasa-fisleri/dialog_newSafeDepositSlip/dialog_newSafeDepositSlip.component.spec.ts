/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_newSafeDepositSlipComponent } from './dialog_newSafeDepositSlip.component';

describe('Dialog_newSafeDepositSlipComponent', () => {
  let component: Dialog_newSafeDepositSlipComponent;
  let fixture: ComponentFixture<Dialog_newSafeDepositSlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_newSafeDepositSlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_newSafeDepositSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
