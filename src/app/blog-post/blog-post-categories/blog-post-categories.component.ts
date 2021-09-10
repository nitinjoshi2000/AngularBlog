import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog-post-categories',
  templateUrl: './blog-post-categories.component.html',
  styleUrls: ['./blog-post-categories.component.css']
})
export class BlogPostCategoriesComponent implements OnInit {
display:any;
dis:any;

  constructor(private b:BlogService) { }

  ngOnInit(): void {
    this.b.displaycategory().subscribe((result)=>{
      this.display=result;
      this.dis=this.display.api;
      console.log(this.dis);
      })
  }

}
