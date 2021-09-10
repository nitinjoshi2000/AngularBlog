import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBlogComponent } from './about-blog.component';

describe('AboutBlogComponent', () => {
  let component: AboutBlogComponent;
  let fixture: ComponentFixture<AboutBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
