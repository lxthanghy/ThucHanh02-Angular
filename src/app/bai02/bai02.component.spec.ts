import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai02Component } from './bai02.component';

describe('Bai02Component', () => {
  let component: Bai02Component;
  let fixture: ComponentFixture<Bai02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
