import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai01Component } from './bai01.component';

describe('Bai01Component', () => {
  let component: Bai01Component;
  let fixture: ComponentFixture<Bai01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
