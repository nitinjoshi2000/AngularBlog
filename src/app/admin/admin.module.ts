import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddblogComponent } from './addblog/addblog.component';
import { ContactComponent } from './contact/contact.component';
import { ViewblogComponent } from './viewblog/viewblog.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddbannerComponent } from './addbanner/addbanner.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    AddStudentComponent,
    AddblogComponent,
    ContactComponent,
    ViewblogComponent,
    AddcategoryComponent,
    AddbannerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
