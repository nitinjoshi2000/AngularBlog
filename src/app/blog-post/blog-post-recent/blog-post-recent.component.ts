import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog-post-recent',
  templateUrl: './blog-post-recent.component.html',
  styleUrls: ['./blog-post-recent.component.css']
})
export class BlogPostRecentComponent implements OnInit {
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
