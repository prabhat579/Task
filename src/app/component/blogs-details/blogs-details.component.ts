import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/blog';
import { BlogDetailsService } from 'src/app/blog-details.service';
import { BlogService } from 'src/app/blog.service';
import { BlogsComponent } from '../blogs/blogs.component';


@Component({
  selector: 'app-blogs-details',
  templateUrl: './blogs-details.component.html',
  styleUrls: ['./blogs-details.component.scss']
})
export class BlogsDetailsComponent implements OnInit {

  constructor( private api:BlogService) { }
  // blogs: Blog = {};

  ngOnInit() {
    // this.api.getBlog().subscribe((data)=>{
    //   this.blogs = data['blogs'];
     
    //   console.warn(data);
    //       })
   
  }

}
