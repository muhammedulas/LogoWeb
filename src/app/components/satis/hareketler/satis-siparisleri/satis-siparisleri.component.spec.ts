/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SatisSiparisleriComponent } from './satis-siparisleri.component';

describe('SatisSiparisleriComponent', () => {
  let component: SatisSiparisleriComponent;
  let fixture: ComponentFixture<SatisSiparisleriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatisSiparisleriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatisSiparisleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
