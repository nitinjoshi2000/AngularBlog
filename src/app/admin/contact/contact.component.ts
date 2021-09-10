import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog-post/service/blog.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  display:any;
  dis:any;
  id:any;
  constructor(private b:BlogService) { }

  ngOnInit(): void {
    this.b.displaycontact().subscribe((result)=>{
      this.display=result;
      this.dis=this.display.api;
      console.log(this.dis);
      })
  }

  deletecontact(id:any)
  {
    // console.log(id);
    this.b.deletecontact(id).subscribe((result)=>{
      // console.log(result);
      this.ngOnInit();
    });
    // this.router.navigate(['/contact']);
  }

}
