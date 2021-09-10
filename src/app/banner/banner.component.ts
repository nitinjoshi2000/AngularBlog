import { BlogService } from 'src/app/blog-post/service/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  display:any;
  dis:any;
  constructor(private b:BlogService) { }

  ngOnInit(): void {
    this.b.displaybanner().subscribe((result)=>{
      this.display=result;
      this.dis=this.display.api;
      console.log(this.dis);
      })
  }


}
