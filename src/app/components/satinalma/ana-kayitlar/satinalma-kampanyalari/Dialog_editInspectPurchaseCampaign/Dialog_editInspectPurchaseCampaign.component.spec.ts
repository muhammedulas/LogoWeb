/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_editInspectPurchaseCampaignComponent } from './Dialog_editInspectPurchaseCampaign.component';

describe('Dialog_editInspectPurchaseCampaignComponent', () => {
  let component: Dialog_editInspectPurchaseCampaignComponent;
  let fixture: ComponentFixture<Dialog_editInspectPurchaseCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_editInspectPurchaseCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_editInspectPurchaseCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
