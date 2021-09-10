import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog-post/service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
display:any;
dis:any;
id:any;
nitin:any;

  constructor(private b:BlogService , private router:Router) { }

  ngOnInit(): void {
    this.nitin= new FormGroup({
      title:new FormControl(''),

    });
    this.b.displaycategory().subscribe((result)=>{
      this.display=result;
      this.dis=this.display.api;
      console.log(this.dis);
      })
  }

  itm() {
    // console.log(this.nitin.value);
   this.b.addcategory(this.nitin.value).subscribe((result)=>{
   console.log(result)
   })
  this.nitin.reset({})
  this.router.navigate(['/addcategory']);
  }

  deletecategory(id:any)
  {
    // console.log(id);
    this.b.deletecategory(id).subscribe((result)=>{
      // console.log(result);
      this.ngOnInit();

    });
     // this.router.navigate(['/add-blog']);
  }
  }


