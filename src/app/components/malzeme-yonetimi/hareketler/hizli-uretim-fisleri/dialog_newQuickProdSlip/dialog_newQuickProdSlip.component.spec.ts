/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_newQuickProdSlipComponent } from './dialog_newQuickProdSlip.component';

describe('Dialog_newQuickProdSlipComponent', () => {
  let component: Dialog_newQuickProdSlipComponent;
  let fixture: ComponentFixture<Dialog_newQuickProdSlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_newQuickProdSlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_newQuickProdSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
