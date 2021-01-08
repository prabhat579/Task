import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/blog';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {


  public blogs = [];

  constructor(private api:BlogService, private route: Router) { }

  ngOnInit() {
    this.api.getBlog()
    .subscribe(data => this.blogs = data);
          }

  
  }

  // navigateToBlogDetail(id: string){
  //   this.route.navigate(['BlogDetail',id]);
  // }



