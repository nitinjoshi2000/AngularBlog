import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog-post/service/blog.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
display:any;
dis:any;
id:any;
nitin:any;


  constructor(private b:BlogService) { }

  ngOnInit(): void {
    this.nitin= new FormGroup({
      title:new FormControl('',[Validators.required, Validators.minLength(3)]),
      description:new FormControl(''),
      author_name:new FormControl(''),
      image:new FormControl(''),
    });

    this.b.displayblog().subscribe((result)=>{
      this.display=result;
      this.dis=this.display.api;
      console.log(this.dis);
      })
  }

  // Validation
  get f(){
      return this.nitin.controls;
    }

 onSelectFile(event:any){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.nitin.get('image').setValue(file);
      //console.log(this.nitin)
    }
  }

  itm() {

   const formData = new FormData();
   formData.append('title',this.nitin.get('title').value);
   formData.append('description',this.nitin.get('description').value);
   formData.append('author_name',this.nitin.get('author_name').value);
   formData.append('image',this.nitin.get('image').value);

  //  console.log(this.nitin.value);
   this.b.addblog(formData).subscribe((result)=>{
   console.log(this.nitin.value);
   })
  this.nitin.reset({})
  }

  deleteblog(id:any)
  {
    // console.log(id);
    this.b.deleteblog(id).subscribe((result)=>{
      // console.log(result);
      this.ngOnInit();
    });
    // this.router.navigate(['/add-blog']);
  }



}

