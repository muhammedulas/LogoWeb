/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_deleteItemSalePriceComponent } from './Dialog_deleteItemSalePrice.component';

describe('Dialog_deleteItemSalePriceComponent', () => {
  let component: Dialog_deleteItemSalePriceComponent;
  let fixture: ComponentFixture<Dialog_deleteItemSalePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_deleteItemSalePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_deleteItemSalePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
