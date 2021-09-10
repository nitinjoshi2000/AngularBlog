import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url:any='http://127.0.0.1:8000/api/';


  constructor(private http:HttpClient) { }

  displayblog(){
    return this.http.get(this.url+'displayblog');
  }

  viewblog(id:any):Observable<any>{
    return this.http.get(this.url+'viewblog/'+id);
  }


  addcontact(data:any){
    return this.http.post(this.url+'insertcontact',data);
  }

  addblog(data:any){
    return this.http.post(this.url+'insertblog',data);
  }

  displaycontact(){
    return this.http.get(this.url+'displaycontact');
  }

  deletecontact(id:any){
    return this.http.get(this.url+'delete/'+id);
  }

  deleteblog(id:any){
    return this.http.get(this.url+'deleteblog/'+id);
  }


  addcategory(data:any){
    return this.http.post(this.url+'insertcategory',data);
  }

  displaycategory(){
    return this.http.get(this.url+'displaycategory');
  }

  deletecategory(id:any){
    return this.http.get(this.url+'deletecategory/'+id);
  }

  addbanner(data:any){
    return this.http.post(this.url+'insertbanner',data);
  }

  displaybanner(){
    return this.http.get(this.url+'displaybanner');
  }

  deletebanner(id:any){
    return this.http.get(this.url+'deletebanner/'+id);
  }



}
