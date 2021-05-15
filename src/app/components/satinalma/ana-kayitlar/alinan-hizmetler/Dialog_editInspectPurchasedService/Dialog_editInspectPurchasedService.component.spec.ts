/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_editInspectPurchasedServiceComponent } from './Dialog_editInspectPurchasedService.component';

describe('Dialog_editInspectPurchasedServiceComponent', () => {
  let component: Dialog_editInspectPurchasedServiceComponent;
  let fixture: ComponentFixture<Dialog_editInspectPurchasedServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_editInspectPurchasedServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_editInspectPurchasedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
