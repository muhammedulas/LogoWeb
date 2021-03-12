/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MalzemeYonetimiComponent } from './malzeme-yonetimi.component';

describe('MalzemeYonetimiComponent', () => {
  let component: MalzemeYonetimiComponent;
  let fixture: ComponentFixture<MalzemeYonetimiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalzemeYonetimiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalzemeYonetimiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
