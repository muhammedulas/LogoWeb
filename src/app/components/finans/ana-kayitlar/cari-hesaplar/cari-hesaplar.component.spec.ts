/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CariHesaplarComponent } from './cari-hesaplar.component';

describe('CariHesaplarComponent', () => {
  let component: CariHesaplarComponent;
  let fixture: ComponentFixture<CariHesaplarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CariHesaplarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CariHesaplarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
