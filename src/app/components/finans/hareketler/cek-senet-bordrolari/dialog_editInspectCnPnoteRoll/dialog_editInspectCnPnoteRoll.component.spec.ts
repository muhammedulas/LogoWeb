/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_editInspectCnPnoteRollComponent } from './dialog_editInspectCnPnoteRoll.component';

describe('Dialog_editInspectCnPnoteRollComponent', () => {
  let component: Dialog_editInspectCnPnoteRollComponent;
  let fixture: ComponentFixture<Dialog_editInspectCnPnoteRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_editInspectCnPnoteRollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_editInspectCnPnoteRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
