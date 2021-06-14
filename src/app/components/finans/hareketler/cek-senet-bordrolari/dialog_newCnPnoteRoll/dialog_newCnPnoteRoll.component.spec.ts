/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_newCnPnoteRollComponent } from './dialog_newCnPnoteRoll.component';

describe('Dialog_newCnPnoteRollComponent', () => {
  let component: Dialog_newCnPnoteRollComponent;
  let fixture: ComponentFixture<Dialog_newCnPnoteRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_newCnPnoteRollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_newCnPnoteRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
