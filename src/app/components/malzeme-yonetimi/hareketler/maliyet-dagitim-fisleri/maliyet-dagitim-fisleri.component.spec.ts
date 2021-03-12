/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaliyetDagitimFisleriComponent } from './maliyet-dagitim-fisleri.component';

describe('MaliyetDagitimFisleriComponent', () => {
  let component: MaliyetDagitimFisleriComponent;
  let fixture: ComponentFixture<MaliyetDagitimFisleriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaliyetDagitimFisleriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaliyetDagitimFisleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
