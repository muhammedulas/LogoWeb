/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_deleteSalesDispatchComponent } from './dialog_deleteSalesDispatch.component';

describe('Dialog_deleteSalesDispatchComponent', () => {
  let component: Dialog_deleteSalesDispatchComponent;
  let fixture: ComponentFixture<Dialog_deleteSalesDispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_deleteSalesDispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_deleteSalesDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
