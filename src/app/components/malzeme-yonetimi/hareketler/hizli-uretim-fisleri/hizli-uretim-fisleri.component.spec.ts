/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HizliUretimFisleriComponent } from './hizli-uretim-fisleri.component';

describe('HizliUretimFisleriComponent', () => {
  let component: HizliUretimFisleriComponent;
  let fixture: ComponentFixture<HizliUretimFisleriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HizliUretimFisleriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HizliUretimFisleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
