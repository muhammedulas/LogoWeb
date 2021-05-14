/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Odeme_tahsilatPlanlariComponent } from './odeme_tahsilat-planlari.component';

describe('Odeme_tahsilatPlanlariComponent', () => {
  let component: Odeme_tahsilatPlanlariComponent;
  let fixture: ComponentFixture<Odeme_tahsilatPlanlariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Odeme_tahsilatPlanlariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Odeme_tahsilatPlanlariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
