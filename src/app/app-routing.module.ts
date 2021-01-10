import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsDetailsComponent } from './component/blogs-details/blogs-details.component';
import { BlogsComponent } from './component/blogs/blogs.component';


const routes: Routes = [
{ path:'', component:BlogsComponent },
{ path:'BlogDetail/:id', component:BlogsDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
