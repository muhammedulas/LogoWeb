/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_editInspectPurchasedServicePriceComponent } from './Dialog_editInspectPurchasedServicePrice.component';

describe('Dialog_editInspectPurchasedServicePriceComponent', () => {
  let component: Dialog_editInspectPurchasedServicePriceComponent;
  let fixture: ComponentFixture<Dialog_editInspectPurchasedServicePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_editInspectPurchasedServicePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_editInspectPurchasedServicePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
