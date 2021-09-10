import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog-contact',
  templateUrl: './blog-contact.component.html',
  styleUrls: ['./blog-contact.component.css']
})
export class BlogContactComponent implements OnInit {

nitin:any;
id:any;

  constructor(private b:BlogService) { }

  ngOnInit(): void {
    this.nitin= new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      phone:new FormControl(''),
      message:new FormControl(''),
    });
  }

  itm() {
    // console.log(this.devesh.value);
   this.b.addcontact(this.nitin.value).subscribe((result)=>{
   console.log(result)
   })
  this.nitin.reset({})
  }


}
