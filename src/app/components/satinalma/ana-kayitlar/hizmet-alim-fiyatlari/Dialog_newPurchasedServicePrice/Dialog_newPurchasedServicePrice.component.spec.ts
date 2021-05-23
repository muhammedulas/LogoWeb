/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_newPurchasedServicePriceComponent } from './Dialog_newPurchasedServicePrice.component';

describe('Dialog_newPurchasedServicePriceComponent', () => {
  let component: Dialog_newPurchasedServicePriceComponent;
  let fixture: ComponentFixture<Dialog_newPurchasedServicePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_newPurchasedServicePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_newPurchasedServicePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
