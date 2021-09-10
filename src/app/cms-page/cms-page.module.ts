import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsPageRoutingModule } from './cms-page-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    ContactComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    CmsPageRoutingModule
  ]
})
export class CmsPageModule { }
