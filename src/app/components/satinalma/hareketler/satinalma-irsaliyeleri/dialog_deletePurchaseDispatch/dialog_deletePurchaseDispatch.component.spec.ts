/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_deletePurchaseDispatchComponent } from './dialog_deletePurchaseDispatch.component';

describe('Dialog_deletePurchaseDispatchComponent', () => {
  let component: Dialog_deletePurchaseDispatchComponent;
  let fixture: ComponentFixture<Dialog_deletePurchaseDispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_deletePurchaseDispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_deletePurchaseDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
