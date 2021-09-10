import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostFeaturedComponent } from './blog-post-featured.component';

describe('BlogPostFeaturedComponent', () => {
  let component: BlogPostFeaturedComponent;
  let fixture: ComponentFixture<BlogPostFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostFeaturedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
