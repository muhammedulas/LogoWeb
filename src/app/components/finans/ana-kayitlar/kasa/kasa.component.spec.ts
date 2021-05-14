/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KasaComponent } from './kasa.component';

describe('KasaComponent', () => {
  let component: KasaComponent;
  let fixture: ComponentFixture<KasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
