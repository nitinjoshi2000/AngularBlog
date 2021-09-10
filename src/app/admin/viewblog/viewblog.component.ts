import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog-post/service/blog.service';

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css']
})
export class ViewblogComponent implements OnInit {
  id:any;
  view:any;
  c:any;
  constructor(private b:BlogService, private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.active.snapshot.paramMap.get('id');
    console.log(this.id);

    this.b.viewblog(+this.id).subscribe((result)=>{
      this.view = result;
      this.c= this.view.api;
    console.log(result);
   });
  }

}
