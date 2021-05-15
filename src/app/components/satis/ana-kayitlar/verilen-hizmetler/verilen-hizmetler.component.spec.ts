/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VerilenHizmetlerComponent } from './verilen-hizmetler.component';

describe('VerilenHizmetlerComponent', () => {
  let component: VerilenHizmetlerComponent;
  let fixture: ComponentFixture<VerilenHizmetlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerilenHizmetlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerilenHizmetlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
