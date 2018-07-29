import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../../interfaces/dashboard/posts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient : HttpClient) { }

  getPost(userId : number) : Observable<Posts[]> {
    return this.httpClient.get<Posts[]>("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
  }
  
  getPostById(postId: number) : Observable<Posts> {
    return this.httpClient.get<Posts>("https://jsonplaceholder.typicode.com/posts?id=" + postId);
  }

  getCommentsById(postId: number) : Observable<Comment[]> {
    return this.httpClient.get<Comment[]>("https://jsonplaceholder.typicode.com/comments?postId=" + postId);
  }
}
