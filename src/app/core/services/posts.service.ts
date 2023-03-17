import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../Models/comment';
import { Post } from '../Models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  url = 'http://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  getPosts(limit: number): Observable<Post> {
    return this.http.get<Post>(`${this.url}posts`, {
      params: { _limit: limit },
    });
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.url}posts/${id}`);
  }

  getCommentsPost(postId: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.url}comments`, { params: { postId } });
  }

  getUserPost(userId: number): Observable<Post> {
    return this.http.get<Post>(`${this.url}posts`, { params: { userId } });
  }
}
