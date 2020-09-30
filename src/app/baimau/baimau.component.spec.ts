import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaimauComponent } from './baimau.component';

describe('BaimauComponent', () => {
  let component: BaimauComponent;
  let fixture: ComponentFixture<BaimauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaimauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaimauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
