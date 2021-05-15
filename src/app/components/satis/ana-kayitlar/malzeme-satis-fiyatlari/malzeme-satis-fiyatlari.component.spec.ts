/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MalzemeSatisFiyatlariComponent } from './malzeme-satis-fiyatlari.component';

describe('MalzemeSatisFiyatlariComponent', () => {
  let component: MalzemeSatisFiyatlariComponent;
  let fixture: ComponentFixture<MalzemeSatisFiyatlariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalzemeSatisFiyatlariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalzemeSatisFiyatlariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
