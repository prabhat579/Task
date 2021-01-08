import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
 

  constructor( private http :HttpClient ) { }

  // getBlog( ) :Observable<Blog[]>{
  //   return this.http.get<Blog[]>('https://jsonplaceholder.typicode.com/posts')
  // }
  getBlog( ){
    return this.http.get<Blog[]>('https://jsonplaceholder.typicode.com/posts')
  }

 
}
