/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_newBankComponent } from './Dialog_newBank.component';

describe('Dialog_newBankComponent', () => {
  let component: Dialog_newBankComponent;
  let fixture: ComponentFixture<Dialog_newBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_newBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_newBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
