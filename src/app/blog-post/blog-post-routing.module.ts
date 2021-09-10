import { BlogPostFeaturedComponent } from './blog-post-featured/blog-post-featured.component';
import { AboutBlogComponent } from './about-blog/about-blog.component';
import { BlogContactComponent } from './blog-contact/blog-contact.component';
import { BlogPostDetailComponent } from './blog-post-detail/blog-post-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'blogdetail/:id',component: BlogPostDetailComponent},
  {path: 'blog-contact',component: BlogContactComponent},
  {path: 'about-blog', component: AboutBlogComponent},
  {path: 'blog-featured',component: BlogPostFeaturedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogPostRoutingModule { }
