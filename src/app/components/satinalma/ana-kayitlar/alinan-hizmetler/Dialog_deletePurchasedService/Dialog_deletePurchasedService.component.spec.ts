/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_deletePurchasedServiceComponent } from './Dialog_deletePurchasedService.component';

describe('Dialog_deletePurchasedServiceComponent', () => {
  let component: Dialog_deletePurchasedServiceComponent;
  let fixture: ComponentFixture<Dialog_deletePurchasedServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_deletePurchasedServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_deletePurchasedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
