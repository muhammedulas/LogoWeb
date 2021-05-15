/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_editInspectBankComponent } from './Dialog_editInspectBank.component';

describe('Dialog_editInspectBankComponent', () => {
  let component: Dialog_editInspectBankComponent;
  let fixture: ComponentFixture<Dialog_editInspectBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_editInspectBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_editInspectBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
