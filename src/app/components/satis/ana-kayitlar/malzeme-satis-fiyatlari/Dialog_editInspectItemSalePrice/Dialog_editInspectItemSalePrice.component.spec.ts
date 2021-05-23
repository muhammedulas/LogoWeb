/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_editInspectItemSalePriceComponent } from './Dialog_editInspectItemSalePrice.component';

describe('Dialog_editInspectItemSalePriceComponent', () => {
  let component: Dialog_editInspectItemSalePriceComponent;
  let fixture: ComponentFixture<Dialog_editInspectItemSalePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_editInspectItemSalePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_editInspectItemSalePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
