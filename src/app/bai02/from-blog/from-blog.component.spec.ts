import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromBlogComponent } from './from-blog.component';

describe('FromBlogComponent', () => {
  let component: FromBlogComponent;
  let fixture: ComponentFixture<FromBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
