/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dialog_deleteBankComponent } from './Dialog_deleteBank.component';

describe('Dialog_deleteBankComponent', () => {
  let component: Dialog_deleteBankComponent;
  let fixture: ComponentFixture<Dialog_deleteBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialog_deleteBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialog_deleteBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
