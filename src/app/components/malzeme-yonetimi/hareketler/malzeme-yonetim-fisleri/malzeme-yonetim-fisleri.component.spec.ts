/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MalzemeYonetimFisleriComponent } from './malzeme-yonetim-fisleri.component';

describe('MalzemeYonetimFisleriComponent', () => {
  let component: MalzemeYonetimFisleriComponent;
  let fixture: ComponentFixture<MalzemeYonetimFisleriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalzemeYonetimFisleriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalzemeYonetimFisleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
