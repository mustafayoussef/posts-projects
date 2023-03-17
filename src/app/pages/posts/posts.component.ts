import { PostsService } from './../../core/services/posts.service';
import { Component } from '@angular/core';
import { Post } from 'src/app/core/Models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  limit = 20;
  totalPosts = 100;
  posts: Post[] | any = [];
  public search: string = '';

  constructor(private postsService: PostsService) {
    this.getPosts();
  }

  public searchSnapshot(name: string) {
    this.search = name;
  }

  getPosts() {
    this.postsService.getPosts(this.limit).subscribe((posts) => {
      this.posts = posts;
    });
  }

  paginate(event: any) {
    this.posts = [];
    this.postsService.getPosts(this.totalPosts).subscribe((posts) => {
      this.posts = posts;
      this.posts = this.posts.splice(event.first, event.rows);
    });
  }
}
