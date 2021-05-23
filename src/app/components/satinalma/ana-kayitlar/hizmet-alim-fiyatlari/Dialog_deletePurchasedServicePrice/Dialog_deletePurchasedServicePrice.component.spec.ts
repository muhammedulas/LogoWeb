/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_deletePurchasedServicePriceComponent } from './Dialog_deletePurchasedServicePrice.component';

describe('Dialog_deletePurchasedServicePriceComponent', () => {
  let component: Dialog_deletePurchasedServicePriceComponent;
  let fixture: ComponentFixture<Dialog_deletePurchasedServicePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_deletePurchasedServicePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_deletePurchasedServicePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
