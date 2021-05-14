/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CekSenetlerComponent } from './cek-senetler.component';

describe('CekSenetlerComponent', () => {
  let component: CekSenetlerComponent;
  let fixture: ComponentFixture<CekSenetlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CekSenetlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CekSenetlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
