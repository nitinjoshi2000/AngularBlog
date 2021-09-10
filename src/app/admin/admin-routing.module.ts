
import { AddStudentComponent } from './add-student/add-student.component';
import { AdminComponent } from './admin.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddblogComponent } from './addblog/addblog.component';
import { ContactComponent } from './contact/contact.component';
import { ViewblogComponent } from './viewblog/viewblog.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddbannerComponent } from './addbanner/addbanner.component';

const routes: Routes = [
  {path:'',component:AdminComponent,
   children:[
     {path:'add_student',component:AddStudentComponent},
     {path: 'addblog',component:AddblogComponent},
     {path: 'displaycontact',component:ContactComponent},
     {path: 'viewblog/:id',component:ViewblogComponent},
     {path: 'addcategory',component:AddcategoryComponent},
     {path: 'addbanner', component:AddbannerComponent},

   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
