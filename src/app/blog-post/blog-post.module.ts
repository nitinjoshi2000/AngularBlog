import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPostRoutingModule } from './blog-post-routing.module';
import { BlogPostFeaturedComponent } from './blog-post-featured/blog-post-featured.component';
import { BlogPostDetailComponent } from './blog-post-detail/blog-post-detail.component';
import { BlogPostRecentComponent } from './blog-post-recent/blog-post-recent.component';
import { BlogPostCategoriesComponent } from './blog-post-categories/blog-post-categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlogContactComponent } from './blog-contact/blog-contact.component';
import { AboutBlogComponent } from './about-blog/about-blog.component';


@NgModule({
  declarations: [
    BlogPostFeaturedComponent,
    BlogPostDetailComponent,
    BlogPostRecentComponent,
    BlogPostCategoriesComponent,
    BlogContactComponent,
    AboutBlogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BlogPostRoutingModule
  ],
  exports: [
    BlogPostFeaturedComponent
  ]
})
export class BlogPostModule { }
