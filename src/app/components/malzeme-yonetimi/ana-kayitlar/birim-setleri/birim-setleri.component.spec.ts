/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BirimSetleriComponent } from './birim-setleri.component';

describe('BirimSetleriComponent', () => {
  let component: BirimSetleriComponent;
  let fixture: ComponentFixture<BirimSetleriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirimSetleriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirimSetleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
