/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HizmetSatisFiyatlariComponent } from './hizmet-satis-fiyatlari.component';

describe('HizmetSatisFiyatlariComponent', () => {
  let component: HizmetSatisFiyatlariComponent;
  let fixture: ComponentFixture<HizmetSatisFiyatlariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HizmetSatisFiyatlariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HizmetSatisFiyatlariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
