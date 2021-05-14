/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BankaFisleriComponent } from './banka-fisleri.component';

describe('BankaFisleriComponent', () => {
  let component: BankaFisleriComponent;
  let fixture: ComponentFixture<BankaFisleriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankaFisleriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankaFisleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
