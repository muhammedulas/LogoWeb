/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_deleteCnPnoteComponent } from './Dialog_deleteCnPnote.component';

describe('Dialog_deleteCnPnoteComponent', () => {
  let component: Dialog_deleteCnPnoteComponent;
  let fixture: ComponentFixture<Dialog_deleteCnPnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_deleteCnPnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_deleteCnPnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
