/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SatisFaturalariComponent } from './satis-faturalari.component';

describe('SatisFaturalariComponent', () => {
  let component: SatisFaturalariComponent;
  let fixture: ComponentFixture<SatisFaturalariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatisFaturalariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatisFaturalariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
