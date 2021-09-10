import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostRecentComponent } from './blog-post-recent.component';

describe('BlogPostRecentComponent', () => {
  let component: BlogPostRecentComponent;
  let fixture: ComponentFixture<BlogPostRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostRecentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
