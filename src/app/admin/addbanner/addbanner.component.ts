import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog-post/service/blog.service';

@Component({
  selector: 'app-addbanner',
  templateUrl: './addbanner.component.html',
  styleUrls: ['./addbanner.component.css']
})
export class AddbannerComponent implements OnInit {
display:any;
dis:any;
id:any;
nitin:any;

  constructor(private b:BlogService) { }

  ngOnInit(): void {
    this.nitin= new FormGroup({
      image:new FormControl(''),
    });
    this.b.displaybanner().subscribe((result)=>{
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
    // console.log(this.nitin.value);
    const formData = new FormData();
   formData.append('image',this.nitin.get('image').value);

   this.b.addbanner(formData).subscribe((result)=>{
   console.log(this.nitin.value);
   })
  this.nitin.reset({})
  }

  deletebanner(id:any)
  {
    // console.log(id);
    this.b.deletebanner(id).subscribe((result)=>{
      // console.log(result);
      this.ngOnInit();
    });
    // this.router.navigate(['/add-blog']);
  }

  }


