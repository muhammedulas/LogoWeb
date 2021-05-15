/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SatisIndirimleriComponent } from './satis-indirimleri.component';

describe('SatisIndirimleriComponent', () => {
  let component: SatisIndirimleriComponent;
  let fixture: ComponentFixture<SatisIndirimleriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatisIndirimleriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatisIndirimleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
