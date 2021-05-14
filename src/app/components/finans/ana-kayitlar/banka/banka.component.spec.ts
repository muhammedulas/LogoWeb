/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BankaComponent } from './banka.component';

describe('BankaComponent', () => {
  let component: BankaComponent;
  let fixture: ComponentFixture<BankaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
