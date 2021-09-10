import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)}

]



@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }