/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CariHesapFisleriComponent } from './cari-hesap-fisleri.component';

describe('CariHesapFisleriComponent', () => {
  let component: CariHesapFisleriComponent;
  let fixture: ComponentFixture<CariHesapFisleriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CariHesapFisleriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CariHesapFisleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
