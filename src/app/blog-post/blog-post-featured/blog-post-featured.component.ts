import { BlogService } from './../service/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post-featured',
  templateUrl: './blog-post-featured.component.html',
  styleUrls: ['./blog-post-featured.component.css']
})
export class BlogPostFeaturedComponent implements OnInit {
display:any;
dis:any;
id:any;

  constructor(private b:BlogService) { }

  ngOnInit(): void {
    this.b.displayblog().subscribe((result)=>{
      this.display=result;
      this.dis=this.display.api;
      console.log(this.dis);
      })
  }

}
