import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog-post-detail',
  templateUrl: './blog-post-detail.component.html',
  styleUrls: ['./blog-post-detail.component.css']
})
export class BlogPostDetailComponent implements OnInit {
  display:any;
  dis:any;
  id:any;
  view:any;
  blog:any;

  constructor(private b:BlogService, private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.active.snapshot.paramMap.get('id');
    console.log(this.id);
    this.b.viewblog(+this.id).subscribe((result)=>{
       this.view  = result;
       this.blog = this.view.api;
       console.log(this.blog);
    });
  }

}
