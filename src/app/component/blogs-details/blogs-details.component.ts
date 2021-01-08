import { HttpClient } from '@angular/common/http';
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

  name:string = '';
  age:number;
  found:boolean;

  constructor(private httpClient:HttpClient){  }
  onNameKeyUp(event:any){
    this.name = event.target.value;
    this.found = false;
  }

  getProfile(){
    console.log(this.name)
    this.httpClient.get(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?name=${this.name}`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.age = data[0].age;
          this.found = true;
        }
      }
    )
  }

  ngOnInit() {
      
   
  }

}
