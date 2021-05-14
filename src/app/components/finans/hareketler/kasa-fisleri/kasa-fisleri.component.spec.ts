/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KasaFisleriComponent } from './kasa-fisleri.component';

describe('KasaFisleriComponent', () => {
  let component: KasaFisleriComponent;
  let fixture: ComponentFixture<KasaFisleriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KasaFisleriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KasaFisleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
