import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
 

  constructor( private http :HttpClient ) { }

  getBlog( ){
    return this.http.get(' https://docully.com/blog/api/blogs')
  }

 
}
