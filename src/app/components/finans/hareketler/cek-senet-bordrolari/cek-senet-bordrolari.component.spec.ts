/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CekSenetBordrolariComponent } from './cek-senet-bordrolari.component';

describe('CekSenetBordrolariComponent', () => {
  let component: CekSenetBordrolariComponent;
  let fixture: ComponentFixture<CekSenetBordrolariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CekSenetBordrolariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CekSenetBordrolariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
