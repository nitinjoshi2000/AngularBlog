import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostCategoriesComponent } from './blog-post-categories.component';

describe('BlogPostCategoriesComponent', () => {
  let component: BlogPostCategoriesComponent;
  let fixture: ComponentFixture<BlogPostCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
